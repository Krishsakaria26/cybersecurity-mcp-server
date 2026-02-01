const {
  buildMcpContext,
  getMcpMetadata
} = require("../services/mcp.service");

/**
 * MCP Context Controller
 */
const getMcpContext = (req, res) => {
  try {
    return res.status(200).json({
      mcp: getMcpMetadata(),
      success: true,
      context: buildMcpContext()
    });
  } catch (err) {
    return res.status(500).json({
      mcp: getMcpMetadata(),
      success: false,
      message: "Failed to build MCP context"
    });
  }
};

module.exports = {
  getMcpContext
};
