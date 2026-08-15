# Excalidraw MCP Server (Excalidraw v2 Spec Compliant)

An MCP (Model Context Protocol) Server for creating and managing Excalidraw diagrams, upgraded to follow the official Excalidraw v2 specification (2025/2026).

## Key Fixes & Improvements over Legacy excalidraw-mcp

1. **Compliant Element Schemas**:
   - `fontFamily`: Normalized to integer enum (`1` Virgil, `2` Helvetica, `3` Cascadia, `5` Excalifont). Accepts string names and auto-converts.
   - `text`: Auto-populates `originalText`, `lineHeight: 1.25`, `textAlign`, `verticalAlign`, estimated `width` and `height`.
   - `arrow` / `line`: Converts point definitions to relative vector arrays `[[0, 0], [dx, dy]]` with `endArrowhead: "arrow"`.
   - `strokeColor` / `backgroundColor`: Properly mapped for all element types.
2. **File Export & Import Tools**:
   - `export_file`: Writes a 100% valid `.excalidraw` file with top-level `type`, `version: 2`, `source`, `elements`, `appState`, `files: {}`.
   - `import_file`: Loads any `.excalidraw` scene from disk into server memory.
   - `get_scene_json`: Returns complete scene JSON string.
   - `clear_canvas`: Resets canvas in memory.
   - `create_elements_batch`: Create multiple elements in one call.

## Global Setup in Oh My Pi (OMP)

Configured in `~/.omp/agent/mcp.json`:

```json
{
  "$schema": "https://raw.githubusercontent.com/can1357/oh-my-pi/main/packages/coding-agent/src/config/mcp-schema.json",
  "mcpServers": {
    "excalidraw": {
      "type": "stdio",
      "command": "node",
      "args": ["/Users/chithien/code/excalidraw-mcp/src/cli.js"]
    }
  }
}
```
