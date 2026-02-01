const express = require("express");
const router = express.Router();

const { getMcpContext } = require("../controllers/mcp.controller");

/**
 * GET /mcp/context
 * Returns controlled MCP context
 */
router.get("/context", getMcpContext);

module.exports = router;
