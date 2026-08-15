#!/usr/bin/env node

import runServer from './index.js';
import { logger } from './utils/logger.js';

runServer().catch((error) => {
  logger.error('Failed to run Excalidraw MCP server', { error: error.message, stack: error.stack });
  process.exit(1);
});
