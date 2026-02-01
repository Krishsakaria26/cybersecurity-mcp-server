/**
 * MCP Context Service
 * Versioned, controlled context exposure
 */

const MCP_SPEC_VERSION = "mcp/1.0";
const CONTEXT_VERSION = "2026-02-01";

const buildMcpContext = () => {
  return {
    project: "cybersecurity-mcp-server",
    capabilities: [
      "controlled-context-exposure",
      "api-key-auth",
      "rate-limiting",
      "audit-logging",
      "production-hardening"
    ],
    environment: process.env.NODE_ENV || "development"
  };
};

const getMcpMetadata = () => {
  return {
    spec: MCP_SPEC_VERSION,
    context_version: CONTEXT_VERSION
  };
};

module.exports = {
  buildMcpContext,
  getMcpMetadata
};
