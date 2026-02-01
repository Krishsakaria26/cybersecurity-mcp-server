const express = require("express");
const router = express.Router();

const { getMcpContext } = require("../controllers/mcp.controller");
const { authenticateApiKey } = require("../middleware/auth.middleware");

/**
 * GET /mcp/context
 * Protected MCP endpoint
 */
router.get("/context", authenticateApiKey, getMcpContext);

module.exports = router;
