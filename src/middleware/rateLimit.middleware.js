const rateLimit = require("express-rate-limit");
const { auditLog } = require("../utils/logger");

/**
 * Rate limiter for MCP routes
 * Logs abuse attempts for audit and incident response
 */
const mcpRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute window
  max: 60, // max requests per IP per window
  standardHeaders: true, // include RateLimit-* headers
  legacyHeaders: false,

  /**
   * Custom handler so we can log rate-limit violations
   */
  handler: (req, res) => {
    auditLog({
      event: "RATE_LIMIT_EXCEEDED",
      method: req.method,
      route: req.originalUrl,
      ip: req.ip
    });

    return res.status(429).json({
      success: false,
      message: "Too many requests, please try again later"
    });
  }
});

module.exports = {
  mcpRateLimiter
};
