# Excalidraw MCP Server (Excalidraw v2 Spec Compliant)

An MCP (Model Context Protocol) Server for creating and managing Excalidraw diagrams, upgraded to follow the official Excalidraw v2 specification.

## Features

### Core Element Tools
| Tool | Description |
|------|-------------|
| `create_element` | Create a single Excalidraw element |
| `create_elements_batch` | Create multiple elements in one call |
| `update_element` | Update an existing element by ID |
| `delete_element` | Delete an element by ID |
| `query_elements` | Query elements by type or custom filters |
| `clear_canvas` | Clear all elements from canvas |

### File Operations
| Tool | Description |
|------|-------------|
| `export_file` | Export canvas to `.excalidraw` file |
| `import_file` | Import `.excalidraw` file into canvas |
| `get_scene_json` | Get full scene JSON |

### Library Items (Official Excalidraw Icon Packs)
| Tool | Description |
|------|-------------|
| `list_library_items` | Search or list items across all installed libraries (`query`, `library`, `limit`) |
| `insert_library_item` | Insert icon at position with optional scale (`itemId`, `x`, `y`, `scale`, `library`) |

**Installed Official Libraries (499+ icons):**
1. **AWS Architecture Icons** (`aws-architecture-icons`): 249 icons (CloudSearch, EMR, DynamoDB, S3, EC2, Lambda, VPC, RDS, Kinesis, etc.)
2. **Google Icons** (`google-icons`): 139 icons (Anthos, BigQuery, Compute Engine, Cloud Run, GKE, Firestore, etc.)
3. **System Design Components** (`system-design-components`): 24 items (Application server, Multi-instance server, Load Balancer, etc.)
4. **Shapes for UML & ER Diagrams** (`uml-er-diagrams`): 21 items (Entities, Relations, Connectors, Shapes)
5. **Software Logos** (`software-logos`): 18 icons (Docker, JSON, Git, Database logos, etc.)
6. **Architecture Diagram Components** (`architecture-diagram-components`): 11 components (Slack, Docker, GitHub, VPC, Subnets)
7. **Software Architecture** (`software-architecture`): 7 core diagram elements
8. **Robots** (`robots`): 7 illustrated robot figures
9. **Built-in Common Icons** (`built-in`): 23 lightweight native icons

### Auto-Layout Flowchart
| Tool | Description |
|------|-------------|
| `create_flowchart` | Create flowchart with DagreJS auto-layout |

**Supported layouts:** Top-Bottom (TB), Left-Right (LR), Bottom-Top (BT), Right-Left (RL)
**Node shapes:** Rectangle, Ellipse, Diamond

```javascript
// Update an existing element
update_element({ id: "mybox1", strokeColor: "#099268", text: "Updated!", width: 200 })

// Query elements by filter
query_elements({ filter: { type: "rectangle" } })

// Export to file
export_file({ filePath: "docs/architecture.excalidraw" })
```

## Setup

Add to your MCP settings file (e.g., `claude_desktop_config.json`, `.cursor/mcp.json`, or `~/.omp/agent/mcp.json`):

```json
{
  "mcpServers": {
    "excalidraw": {
      "type": "stdio",
      "command": "node",
      "args": ["/path/to/excalidraw-mcp/src/cli.js"]
    }
  }
}
```
