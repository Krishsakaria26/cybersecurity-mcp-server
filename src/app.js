const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const mcpRoutes = require("./routes/mcp.routes");

const app = express();

/* -------------------- Core Middleware -------------------- */

/* Limit JSON body size to prevent abuse */
app.use(express.json({ limit: "10kb" }));

/* Security headers (API-safe configuration) */
app.use(
  helmet({
    contentSecurityPolicy: false, // not needed for API-only server
    crossOriginEmbedderPolicy: false
  })
);

/* Strict CORS policy (block browsers by default) */
app.use(
  cors({
    origin: false, // disallow browser origins
    methods: ["GET"],
    allowedHeaders: ["x-api-key", "Content-Type"]
  })
);

/* -------------------- Routes -------------------- */

/* Health check (public) */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "cybersecurity-mcp-server",
    uptime: process.uptime()
  });
});

/* MCP routes (protected + rate-limited internally) */
app.use("/mcp", mcpRoutes);

module.exports = app;
