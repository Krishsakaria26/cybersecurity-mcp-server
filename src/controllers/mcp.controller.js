const { buildMcpContext } = require("../services/mcp.service");

/**
 * Controller: Handles HTTP layer only
 */
const getMcpContext = (req, res) => {
  try {
    const context = buildMcpContext();

    return res.status(200).json({
      success: true,
      context
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve MCP context"
    });
  }
};

module.exports = {
  getMcpContext
};
