const express = require("express");
const router = express.Router();

const { getMcpContext } = require("../controllers/mcp.controller");
const { authenticateApiKey } = require("../middleware/auth.middleware");
const { mcpRateLimiter } = require("../middleware/rateLimit.middleware");

/**
 * GET /mcp/context
 * MCP spec-aligned, versioned, protected endpoint
 */
router.get(
  "/context",
  mcpRateLimiter,          // abuse protection
  authenticateApiKey,      // authentication
  (req, res, next) => {
    // MCP spec signaling for clients
    res.setHeader("X-MCP-Spec", "mcp/1.0");
    next();
  },
  getMcpContext             // controller
);

module.exports = router;
