const express = require("express");
const router = express.Router();

const { getMcpContext } = require("../controllers/mcp.controller");
const { authenticateApiKey } = require("../middleware/auth.middleware");
const { mcpRateLimiter } = require("../middleware/rateLimit.middleware");

/**
 * GET /mcp/context
 * Protected + rate-limited MCP endpoint
 */
router.get(
  "/context",
  mcpRateLimiter,
  authenticateApiKey,
  getMcpContext
);

module.exports = router;
