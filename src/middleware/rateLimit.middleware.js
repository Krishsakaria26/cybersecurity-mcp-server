const rateLimit = require("express-rate-limit");

/**
 * Rate limiter for MCP routes
 * Example policy:
 *  - 60 requests per 1 minute per IP
 */
const mcpRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // limit each IP to 60 requests per window
  standardHeaders: true, // return rate limit info in headers
  legacyHeaders: false,  // disable X-RateLimit-* headers
  message: {
    success: false,
    message: "Too many requests, please try again later"
  }
});

module.exports = {
  mcpRateLimiter
};
