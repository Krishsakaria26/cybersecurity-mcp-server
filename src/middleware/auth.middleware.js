const { auditLog } = require("../utils/logger");

/**
 * API Key authentication middleware
 * Logs all auth attempts for audit purposes
 */
const authenticateApiKey = (req, res, next) => {
  const clientKey = req.headers["x-api-key"];
  const serverKey = process.env.MCP_API_KEY;

  const ip = req.ip;
  const route = req.originalUrl;
  const method = req.method;

  /* Server misconfiguration */
  if (!serverKey) {
    auditLog({
      event: "AUTH_ERROR",
      method,
      route,
      ip,
      reason: "Server API key not configured"
    });

    return res.status(500).json({
      success: false,
      message: "Server authentication not configured"
    });
  }

  /* Missing API key */
  if (!clientKey) {
    auditLog({
      event: "AUTH_FAILED",
      method,
      route,
      ip,
      reason: "API key missing"
    });

    return res.status(401).json({
      success: false,
      message: "API key missing"
    });
  }

  /* Invalid API key */
  if (clientKey !== serverKey) {
    auditLog({
      event: "AUTH_FAILED",
      method,
      route,
      ip,
      reason: "Invalid API key"
    });

    return res.status(403).json({
      success: false,
      message: "Invalid API key"
    });
  }

  /* Successful authentication */
  auditLog({
    event: "AUTH_SUCCESS",
    method,
    route,
    ip
  });

  next(); // authenticated
};

module.exports = {
  authenticateApiKey
};
