const express = require("express");
const mcpRoutes = require("./routes/mcp.routes");

const app = express();

app.use(express.json());

/* Health check */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "cybersecurity-mcp-server",
    uptime: process.uptime()
  });
});

/* MCP routes */
app.use("/mcp", mcpRoutes);

module.exports = app;
