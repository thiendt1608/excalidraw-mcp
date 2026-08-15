process.env.NODE_DISABLE_COLORS = '1';
process.env.NO_COLOR = '1';

import fs from 'fs';
import path from 'path';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema, 
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema
} from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
import dotenv from 'dotenv';
import { logger } from './utils/logger.js';
import { 
  elements,
  normalizeElement,
  EXCALIDRAW_ELEMENT_TYPES 
} from './types.js';

dotenv.config();

const sceneState = {
  theme: 'light',
  gridSize: 20,
  viewBackgroundColor: '#ffffff'
};

function buildExcalidrawFile() {
  return {
    type: 'excalidraw',
    version: 2,
    source: 'https://excalidraw.com',
    elements: Array.from(elements.values()),
    appState: {
      gridSize: sceneState.gridSize,
      viewBackgroundColor: sceneState.viewBackgroundColor
    },
    files: {}
  };
}

// Schemas
const ElementSchema = z.object({
  id: z.string().optional(),
  type: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number().optional(),
  height: z.number().optional(),
  points: z.any().optional(),
  backgroundColor: z.string().optional(),
  strokeColor: z.string().optional(),
  color: z.string().optional(),
  strokeWidth: z.number().optional(),
  strokeStyle: z.string().optional(),
  fillStyle: z.string().optional(),
  roughness: z.number().optional(),
  opacity: z.number().optional(),
  text: z.string().optional(),
  fontSize: z.number().optional(),
  fontFamily: z.union([z.number(), z.string()]).optional(),
  textAlign: z.string().optional(),
  verticalAlign: z.string().optional(),
  lineHeight: z.number().optional(),
  roundness: z.any().optional(),
  endArrowhead: z.string().nullable().optional()
});

const BatchCreateSchema = z.object({
  elements: z.array(ElementSchema)
});

const ExportFileSchema = z.object({
  filePath: z.string()
});

const ImportFileSchema = z.object({
  filePath: z.string()
});

const QuerySchema = z.object({
  type: z.string().optional(),
  filter: z.record(z.any()).optional()
});

// Create MCP Server
const server = new Server(
  {
    name: 'excalidraw-mcp',
    version: '1.1.0'
  },
  {
    capabilities: {
      tools: {},
      resources: {}
    }
  }
);

// List Tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'create_element',
        description: 'Create a new Excalidraw element (100% Excalidraw v2 spec compliant). Supports rectangle, diamond, ellipse, text, arrow, line.',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            type: { type: 'string', enum: Object.values(EXCALIDRAW_ELEMENT_TYPES) },
            x: { type: 'number' },
            y: { type: 'number' },
            width: { type: 'number' },
            height: { type: 'number' },
            points: { type: 'array', description: 'Array of points [[0,0], [dx,dy]] for arrows and lines' },
            backgroundColor: { type: 'string' },
            strokeColor: { type: 'string' },
            color: { type: 'string', description: 'Alias for strokeColor in text elements' },
            strokeWidth: { type: 'number' },
            strokeStyle: { type: 'string', enum: ['solid', 'dashed', 'dotted'] },
            fillStyle: { type: 'string', enum: ['solid', 'hachure', 'cross-hatch'] },
            roughness: { type: 'number' },
            opacity: { type: 'number' },
            text: { type: 'string' },
            fontSize: { type: 'number' },
            fontFamily: { type: 'number', description: '1 (Virgil), 2 (Helvetica), 3 (Cascadia), 5 (Excalifont)' },
            textAlign: { type: 'string', enum: ['left', 'center', 'right'] },
            verticalAlign: { type: 'string', enum: ['top', 'middle', 'bottom'] },
            endArrowhead: { type: 'string', nullable: true }
          },
          required: ['type', 'x', 'y']
        }
      },
      {
        name: 'create_elements_batch',
        description: 'Create multiple Excalidraw elements in a single call.',
        inputSchema: {
          type: 'object',
          properties: {
            elements: { type: 'array', items: { type: 'object' } }
          },
          required: ['elements']
        }
      },
      {
        name: 'export_file',
        description: 'Export the complete Excalidraw scene to a valid .excalidraw JSON file on disk.',
        inputSchema: {
          type: 'object',
          properties: {
            filePath: { type: 'string', description: 'Destination path, e.g. docs/diagram.excalidraw' }
          },
          required: ['filePath']
        }
      },
      {
        name: 'import_file',
        description: 'Load an existing .excalidraw file into memory.',
        inputSchema: {
          type: 'object',
          properties: {
            filePath: { type: 'string', description: 'Path to .excalidraw file' }
          },
          required: ['filePath']
        }
      },
      {
        name: 'get_scene_json',
        description: 'Get the full valid .excalidraw file JSON content as string.',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'clear_canvas',
        description: 'Clear all elements from the Excalidraw canvas.',
        inputSchema: {
          type: 'object',
          properties: {}
        }
      },
      {
        name: 'delete_element',
        description: 'Delete an element by its ID.',
        inputSchema: {
          type: 'object',
          properties: {
            id: { type: 'string' }
          },
          required: ['id']
        }
      },
      {
        name: 'query_elements',
        description: 'Query elements with optional filters.',
        inputSchema: {
          type: 'object',
          properties: {
            type: { type: 'string' },
            filter: { type: 'object' }
          }
        }
      }
    ]
  };
});

// Call Tools
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  logger.info(`Tool called: ${name}`);

  try {
    switch (name) {
      case 'create_element': {
        const indexStr = `a${elements.size}`;
        const norm = normalizeElement(args, indexStr);
        elements.set(norm.id, norm);
        return {
          content: [{ type: 'text', text: JSON.stringify(norm, null, 2) }]
        };
      }

      case 'create_elements_batch': {
        const params = BatchCreateSchema.parse(args);
        const created = [];
        for (const raw of params.elements) {
          const indexStr = `a${elements.size}`;
          const norm = normalizeElement(raw, indexStr);
          elements.set(norm.id, norm);
          created.push(norm);
        }
        return {
          content: [{ type: 'text', text: `Created ${created.length} elements successfully.` }]
        };
      }

      case 'export_file': {
        const params = ExportFileSchema.parse(args);
        const targetPath = path.resolve(process.cwd(), params.filePath);
        const dir = path.dirname(targetPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        const data = buildExcalidrawFile();
        fs.writeFileSync(targetPath, JSON.stringify(data, null, 2), 'utf8');
        return {
          content: [{ type: 'text', text: `Exported ${data.elements.length} elements to ${targetPath}` }]
        };
      }

      case 'import_file': {
        const params = ImportFileSchema.parse(args);
        const targetPath = path.resolve(process.cwd(), params.filePath);
        if (!fs.existsSync(targetPath)) {
          throw new Error(`File not found: ${targetPath}`);
        }
        const raw = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        const loaded = raw.elements || (Array.isArray(raw) ? raw : []);
        elements.clear();
        for (let i = 0; i < loaded.length; i++) {
          const norm = normalizeElement(loaded[i], `a${i}`);
          elements.set(norm.id, norm);
        }
        return {
          content: [{ type: 'text', text: `Imported ${elements.size} elements from ${targetPath}` }]
        };
      }

      case 'get_scene_json': {
        const data = buildExcalidrawFile();
        return {
          content: [{ type: 'text', text: JSON.stringify(data, null, 2) }]
        };
      }

      case 'clear_canvas': {
        const count = elements.size;
        elements.clear();
        return {
          content: [{ type: 'text', text: `Cleared ${count} elements from canvas.` }]
        };
      }

      case 'delete_element': {
        const { id } = args;
        const exists = elements.delete(id);
        return {
          content: [{ type: 'text', text: JSON.stringify({ id, deleted: exists }) }]
        };
      }

      case 'query_elements': {
        const params = QuerySchema.parse(args || {});
        let results = Array.from(elements.values());
        if (params.type) {
          results = results.filter(e => e.type === params.type);
        }
        if (params.filter) {
          results = results.filter(e => {
            return Object.entries(params.filter).every(([k, v]) => e[k] === v);
          });
        }
        return {
          content: [{ type: 'text', text: JSON.stringify(results, null, 2) }]
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    logger.error('Tool execution error', { error: error.message, stack: error.stack });
    return {
      isError: true,
      content: [{ type: 'text', text: `Error: ${error.message}` }]
    };
  }
});

// Start server
async function runServer() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  logger.info('Excalidraw MCP Server v1.1.0 running on stdio');
}

export default runServer;
