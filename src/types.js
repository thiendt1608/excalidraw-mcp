export const EXCALIDRAW_ELEMENT_TYPES = {
  RECTANGLE: 'rectangle',
  ELLIPSE: 'ellipse',
  DIAMOND: 'diamond',
  ARROW: 'arrow',
  TEXT: 'text',
  LINE: 'line',
  FREEDRAW: 'freedraw',
  IMAGE: 'image',
  FRAME: 'frame'
};

export const FONT_FAMILY = {
  VIRGIL: 1,      // Hand-drawn
  HELVETICA: 2,   // Normal / Sans-serif
  CASCADIA: 3,    // Monospace / Code
  EXCALIFONT: 5   // Excalifont
};

// In-memory storage for Excalidraw elements
export const elements = new Map();

// Helper to generate IDs
export function generateId() {
  return Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
}

// Convert string fontFamily to integer enum if user passes a string
export function normalizeFontFamily(val) {
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    const v = val.toLowerCase();
    if (v.includes('hand') || v.includes('virgil')) return FONT_FAMILY.VIRGIL;
    if (v.includes('mono') || v.includes('code') || v.includes('cascadia')) return FONT_FAMILY.CASCADIA;
    if (v.includes('excali')) return FONT_FAMILY.EXCALIFONT;
    return FONT_FAMILY.HELVETICA;
  }
  return FONT_FAMILY.VIRGIL;
}

// Normalize any element to 100% compliant Excalidraw v2 element
export function normalizeElement(raw, index = 'a0') {
  const id = raw.id || generateId();
  const type = raw.type || 'rectangle';
  const x = Number(raw.x || 0);
  const y = Number(raw.y || 0);
  const strokeColor = raw.strokeColor || (type === 'text' ? (raw.color || '#000000') : '#1e1e1e');
  const backgroundColor = raw.backgroundColor || 'transparent';
  const fillStyle = raw.fillStyle || 'solid';
  const strokeWidth = Number(raw.strokeWidth || (type === 'arrow' ? 2 : 1));
  const strokeStyle = raw.strokeStyle || 'solid';
  const roughness = Number(raw.roughness ?? 1);
  const opacity = Number(raw.opacity ?? 100);

  const base = {
    id,
    type,
    x,
    y,
    width: Number(raw.width || 100),
    height: Number(raw.height || 100),
    angle: Number(raw.angle || 0),
    strokeColor,
    backgroundColor,
    fillStyle,
    strokeWidth,
    strokeStyle,
    roughness,
    opacity,
    groupIds: raw.groupIds || [],
    frameId: raw.frameId || null,
    roundness: raw.roundness !== undefined ? raw.roundness : (type === 'rectangle' ? { type: 3 } : null),
    seed: raw.seed || Math.floor(Math.random() * 1000000000),
    version: raw.version ? raw.version + 1 : 1,
    versionNonce: Math.floor(Math.random() * 1000000000),
    isDeleted: false,
    boundElements: raw.boundElements || [],
    updated: Date.now(),
    link: raw.link || null,
    locked: Boolean(raw.locked),
    index: raw.index || index
  };

  if (type === 'text') {
    const text = String(raw.text || '');
    const fontSize = Number(raw.fontSize || 16);
    const lines = text.split('\n');
    const maxLineLen = Math.max(...lines.map(l => l.length), 1);
    
    // Estimate width & height if omitted
    const estWidth = raw.width || Math.max(maxLineLen * (fontSize * 0.6), 20);
    const estHeight = raw.height || Math.max(lines.length * (fontSize * 1.3), 20);

    return {
      ...base,
      width: estWidth,
      height: estHeight,
      text,
      originalText: raw.originalText || text,
      fontSize,
      fontFamily: normalizeFontFamily(raw.fontFamily),
      textAlign: raw.textAlign || 'left',
      verticalAlign: raw.verticalAlign || 'top',
      lineHeight: Number(raw.lineHeight || 1.25),
      containerId: raw.containerId || null,
      autoResize: raw.autoResize !== undefined ? raw.autoResize : true
    };
  }

  if (type === 'arrow' || type === 'line') {
    let points = raw.points;
    if (!Array.isArray(points) || points.length === 0) {
      const w = Number(raw.width || 100);
      const h = Number(raw.height || 0);
      points = [[0, 0], [w, h]];
    } else if (typeof points[0] === 'object' && !Array.isArray(points[0])) {
      // Convert [{x, y}] -> [[x, y]]
      points = points.map(p => [Number(p.x || 0), Number(p.y || 0)]);
    }

    const w = Math.abs(points[points.length - 1][0] - points[0][0]);
    const h = Math.abs(points[points.length - 1][1] - points[0][1]);

    return {
      ...base,
      width: w,
      height: h,
      points,
      startBinding: raw.startBinding || null,
      endBinding: raw.endBinding || null,
      startArrowhead: raw.startArrowhead || null,
      endArrowhead: raw.endArrowhead !== undefined ? raw.endArrowhead : (type === 'arrow' ? 'arrow' : null)
    };
  }

  return base;
}
