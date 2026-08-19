/**
 * Auto-Layout Engine for Excalidraw
 * 
 * Uses DagreJS to calculate optimal node positions for diagrams.
 */

import dagre from 'dagre';

const DEFAULT_NODE_WIDTH = 140;
const DEFAULT_NODE_HEIGHT = 60;
const DEFAULT_RANK_SEP = 80;
const DEFAULT_NODE_SEP = 50;
const DEFAULT_MARGIN_X = 40;
const DEFAULT_MARGIN_Y = 40;

export function createLayout(nodes, edges, options = {}) {
  const {
    rankdir = 'TB',
    ranksep = DEFAULT_RANK_SEP,
    nodesep = DEFAULT_NODE_SEP,
    marginx = DEFAULT_MARGIN_X,
    marginy = DEFAULT_MARGIN_Y,
    nodeWidth = DEFAULT_NODE_WIDTH,
    nodeHeight = DEFAULT_NODE_HEIGHT
  } = options;

  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir, ranksep, nodesep, marginx, marginy });
  g.setDefaultEdgeLabel(() => ({}));

  for (const node of nodes) {
    g.setNode(node.id, {
      ...node,
      width: node.width || nodeWidth,
      height: node.height || nodeHeight
    });
  }

  for (const edge of edges) {
    g.setEdge(edge.source, edge.target);
  }

  dagre.layout(g);

  return {
    nodes: g.nodes().map(id => {
      const n = g.node(id);
      return { id, x: n.x, y: n.y, width: n.width, height: n.height, label: n.label || id };
    }),
    edges: g.edges().map(e => ({
      source: e.v, target: e.w, points: g.edge(e).points
    })),
    graph: { width: g.graph().width, height: g.graph().height }
  };
}

export function layoutToElements(layout, options = {}) {
  const {
    strokeColor = '#1e1e1e',
    backgroundColor = '#f5f5f5',
    fillStyle = 'solid',
    strokeWidth = 1,
    roughness = 0,
    fontSize = 14,
    fontFamily = 2,
    nodeType = 'rectangle',
    arrowStrokeColor = '#1e1e1e'
  } = options;

  const elements = [];

  for (const node of layout.nodes) {
    const hw = node.width / 2, hh = node.height / 2;
    elements.push({
      type: nodeType,
      x: node.x - hw, y: node.y - hh,
      width: node.width, height: node.height,
      strokeColor, backgroundColor, fillStyle, strokeWidth, roughness
    });
    elements.push({
      type: 'text', x: node.x, y: node.y,
      text: node.label, fontSize, fontFamily,
      strokeColor, textAlign: 'center', verticalAlign: 'middle'
    });
  }

  for (const edge of layout.edges) {
    if (edge.points && edge.points.length >= 2) {
      elements.push({
        type: 'arrow',
        points: edge.points.map(p => [p.x, p.y]),
        strokeColor: arrowStrokeColor,
        strokeWidth: strokeWidth + 0.5,
        roughness: 0,
        startArrowhead: null, endArrowhead: 'arrow'
      });
    }
  }

  return elements;
}

export function createAutoLayoutDiagram(nodes, edges, layoutOptions = {}, styleOptions = {}) {
  const layout = createLayout(nodes, edges, layoutOptions);
  return {
    elements: layoutToElements(layout, styleOptions),
    layout,
    graphWidth: layout.graph.width,
    graphHeight: layout.graph.height
  };
}

export function parseSimpleGraph(text) {
  const nodes = [], edges = [];
  const nodeIds = new Set();
  const parts = text.split(/\s*-->\s*/).map(p => p.trim()).filter(Boolean);
  
  for (let i = 0; i < parts.length - 1; i++) {
    const [source, target] = [parts[i], parts[i + 1]];
    if (!nodeIds.has(source)) { nodes.push({ id: source, label: source }); nodeIds.add(source); }
    if (!nodeIds.has(target)) { nodes.push({ id: target, label: target }); nodeIds.add(target); }
    edges.push({ source, target });
  }
  
  return { nodes, edges };
}
