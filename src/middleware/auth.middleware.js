/**
 * API Key authentication middleware
 */
const authenticateApiKey = (req, res, next) => {
  const clientKey = req.headers["x-api-key"];
  const serverKey = process.env.MCP_API_KEY;

  if (!serverKey) {
    return res.status(500).json({
      success: false,
      message: "Server authentication not configured"
    });
  }

  if (!clientKey) {
    return res.status(401).json({
      success: false,
      message: "API key missing"
    });
  }

  if (clientKey !== serverKey) {
    return res.status(403).json({
      success: false,
      message: "Invalid API key"
    });
  }

  next(); // authenticated
};

module.exports = {
  authenticateApiKey
};
