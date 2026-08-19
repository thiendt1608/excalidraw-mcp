/**
 * Library Item Loader
 * 
 * Handles loading, transforming, and inserting library items
 * from both built-in registry and official Excalidraw libraries.
 */

import { generateId } from '../types.js';
import { getLibraryItem as getBuiltinItem, listLibraryItems as listBuiltinItems, listCategories as listBuiltinCategories } from './registry.js';
import { buildFullCatalog } from './catalog.js';

// Cache catalog in memory
let cachedCatalog = null;
let cachedMeta = null;

function getCatalog() {
  if (!cachedCatalog) {
    const { catalog, librariesMeta } = buildFullCatalog();
    cachedCatalog = catalog;
    cachedMeta = librariesMeta;
  }
  return { catalog: cachedCatalog, librariesMeta: cachedMeta };
}

/**
 * Calculate bounding box of an element
 */
function getBoundingBox(element) {
  if (element.type === 'text') {
    const fontSize = element.fontSize || 14;
    const lines = (element.text || '').split('\n');
    const width = Math.max(...lines.map(l => l.length * fontSize * 0.6), 20);
    const height = Math.max(lines.length * fontSize * 1.2, 20);
    return { width, height };
  }
  if (element.type === 'line' || element.type === 'arrow' || element.type === 'freedraw') {
    if (element.points && Array.isArray(element.points) && element.points.length > 0) {
      let minX = 0, minY = 0, maxX = 0, maxY = 0;
      for (const [px, py] of element.points) {
        minX = Math.min(minX, px);
        minY = Math.min(minY, py);
        maxX = Math.max(maxX, px);
        maxY = Math.max(maxY, py);
      }
      return { width: Math.max(maxX - minX, element.width || 20), height: Math.max(maxY - minY, element.height || 20) };
    }
  }
  return {
    width: element.width || 40,
    height: element.height || 40
  };
}

/**
 * Calculate bounding box of multiple elements
 */
function getGroupBoundingBox(elements) {
  if (!elements || elements.length === 0) {
    return { x: 0, y: 0, width: 60, height: 60 };
  }

  let minX = Infinity, minY = Infinity;
  let maxX = -Infinity, maxY = -Infinity;
  
  for (const el of elements) {
    const elX = Number(el.x || 0);
    const elY = Number(el.y || 0);
    const bb = getBoundingBox(el);
    minX = Math.min(minX, elX);
    minY = Math.min(minY, elY);
    maxX = Math.max(maxX, elX + bb.width);
    maxY = Math.max(maxY, elY + bb.height);
  }
  
  if (!isFinite(minX) || !isFinite(minY)) {
    minX = 0;
    minY = 0;
    maxX = 60;
    maxY = 60;
  }

  return {
    x: minX,
    y: minY,
    width: Math.max(maxX - minX, 20),
    height: Math.max(maxY - minY, 20)
  };
}

/**
 * Find library item by ID or name in built-in registry or official libraries
 */
export function findLibraryItem(itemId, library = null) {
  // 1. Check built-in items first
  const builtin = getBuiltinItem(itemId);
  if (builtin) {
    return {
      itemId,
      name: builtin.name,
      library: 'built-in',
      category: builtin.category,
      elements: builtin.elements
    };
  }

  const { catalog } = getCatalog();

  // 2. Direct match in full catalog (e.g., 'aws-architecture-icons:dynamodb')
  if (catalog[itemId]) {
    return catalog[itemId];
  }

  // 3. Match with library prefix if specified (e.g., library='google-icons', itemId='anthos')
  if (library) {
    const prefixedId = `${library}:${itemId}`;
    if (catalog[prefixedId]) {
      return catalog[prefixedId];
    }
    // Check by index in specified library
    const num = parseInt(itemId, 10);
    if (!isNaN(num)) {
      const matchByIndex = Object.values(catalog).find(c => c.library === library && c.index === num);
      if (matchByIndex) return matchByIndex;
    }
  }

  // 4. Fuzzy match across all items in catalog (by shortId or partial name match)
  const normalizedQuery = itemId.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Exact shortId match
  const matchByShortId = Object.values(catalog).find(c => 
    c.shortId.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedQuery
  );
  if (matchByShortId) return matchByShortId;

  // Name match
  const matchByName = Object.values(catalog).find(c => 
    c.name.toLowerCase().replace(/[^a-z0-9]/g, '') === normalizedQuery
  );
  if (matchByName) return matchByName;

  // Substring match
  const matchSubstring = Object.values(catalog).find(c => 
    c.id.toLowerCase().includes(normalizedQuery) || c.name.toLowerCase().includes(itemId.toLowerCase())
  );
  if (matchSubstring) return matchSubstring;

  return null;
}

/**
 * Transform library item elements to target position with scale
 * 
 * @param {string} itemId - Library item ID or name
 * @param {number} x - Target X position
 * @param {number} y - Target Y position
 * @param {number} scale - Scale factor (default: 1)
 * @param {string} library - Optional library name filter
 * @returns {Object} Transformed elements and metadata
 */
export function loadLibraryItem(itemId, x = 0, y = 0, scale = 1, library = null) {
  const item = findLibraryItem(itemId, library);
  
  if (!item) {
    throw new Error(`Library item '${itemId}' not found. Use list_library_items to search available icons across all official libraries.`);
  }
  
  if (!item.elements || item.elements.length === 0) {
    throw new Error(`Library item '${itemId}' has no elements.`);
  }
  
  // Calculate original bounding box
  const originalBbox = getGroupBoundingBox(item.elements);
  const commonGroupId = generateId();
  
  // Transform elements to target coordinates
  const transformedElements = item.elements.map((el) => {
    const newId = generateId();
    const origX = Number(el.x || 0);
    const origY = Number(el.y || 0);
    
    // Scale and translate position
    const newX = x + (origX - originalBbox.x) * scale;
    const newY = y + (origY - originalBbox.y) * scale;
    
    const transformed = {
      ...el,
      id: newId,
      x: newX,
      y: newY,
      ...(el.width !== undefined && { width: el.width * scale }),
      ...(el.height !== undefined && { height: el.height * scale }),
      ...(el.type === 'text' && el.fontSize && { fontSize: el.fontSize * scale }),
      groupIds: [commonGroupId]
    };
    
    if (el.points && Array.isArray(el.points)) {
      transformed.points = el.points.map(([px, py]) => [
        px * scale,
        py * scale
      ]);
    }
    
    if (transformed.strokeWidth) {
      transformed.strokeWidth = Math.max(0.5, transformed.strokeWidth * scale);
    }
    
    return transformed;
  });
  
  return {
    elements: transformedElements,
    metadata: {
      itemId: item.id || itemId,
      itemName: item.name,
      library: item.library || 'built-in',
      originalBbox,
      scale,
      placedAt: { x, y }
    }
  };
}

/**
 * Query and list library items with flexible search
 */
export function queryLibraryItems(options = {}) {
  const { category = null, library = null, query = null, limit = 50 } = typeof options === 'string' ? { category: options } : options;
  const { catalog, librariesMeta } = getCatalog();
  
  let results = [];

  // Add built-in items
  const builtinItems = listBuiltinItems().map(b => ({
    id: b.id,
    name: b.name,
    library: 'built-in',
    category: b.category
  }));
  results.push(...builtinItems);

  // Add catalog items
  const catalogItems = Object.values(catalog).map(c => ({
    id: c.id,
    name: c.name,
    library: c.library,
    libraryName: c.libraryName,
    elementCount: c.elements.length
  }));
  results.push(...catalogItems);

  // Apply filters
  if (library) {
    results = results.filter(r => r.library === library || (r.libraryName && r.libraryName.toLowerCase().includes(library.toLowerCase())));
  }

  if (category) {
    results = results.filter(r => r.category === category);
  }

  if (query) {
    const q = query.toLowerCase();
    results = results.filter(r => 
      r.id.toLowerCase().includes(q) || 
      (r.name && r.name.toLowerCase().includes(q)) ||
      (r.library && r.library.toLowerCase().includes(q))
    );
  }

  return {
    totalInstalledLibraries: librariesMeta.length + 1,
    installedLibraries: [
      { key: 'built-in', name: 'Built-in Common Icons', itemCount: builtinItems.length },
      ...librariesMeta
    ],
    totalMatches: results.length,
    items: results.slice(0, limit)
  };
}

export function listCategories() {
  const { librariesMeta } = getCatalog();
  return [
    ...listBuiltinCategories(),
    ...librariesMeta.map(m => m.key)
  ];
}
