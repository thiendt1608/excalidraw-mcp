import { queryLibraryItems, loadLibraryItem } from './libraries/loader.js';
import { createAutoLayoutDiagram, parseSimpleGraph } from './utils/auto-layout.js';
import { elements, normalizeElement } from './types.js';

console.log('Testing Excalidraw MCP Server...');

// 1. Test Library Catalog
const catalog = queryLibraryItems();
console.log(`✓ Installed libraries: ${catalog.totalInstalledLibraries}`);
console.log(`✓ Total available items: ${catalog.totalMatches}`);

// 2. Test Loading an Icon
const icon = loadLibraryItem('aws-architecture-icons:dynamodb', 100, 100);
console.log(`✓ Loaded icon: ${icon.metadata.itemName} (${icon.elements.length} elements)`);

// 3. Test Auto-Layout Flowchart
const graph = parseSimpleGraph('Client --> API_Gateway --> Service --> Database');
const diagram = createAutoLayoutDiagram(graph.nodes, graph.edges, { rankdir: 'LR' });
console.log(`✓ Created flowchart: ${diagram.elements.length} elements (${graph.nodes.length} nodes, ${graph.edges.length} edges)`);

// 4. Test Element Normalization
for (const el of diagram.elements) {
  const norm = normalizeElement(el, `a${elements.size}`);
  elements.set(norm.id, norm);
}
console.log(`✓ Canvas contains ${elements.size} elements`);

console.log('\nAll tests passed successfully!');
