/**
 * Service: Core MCP context logic
 * This is where SECURITY decisions live
 */
const buildMcpContext = () => {
  /**
   * Mock MCP context (SAFE)
   * No secrets, no system data
   */
  return {
    project: "cybersecurity-mcp-server",
    capabilities: [
      "controlled-context-exposure",
      "security-first-architecture",
      "rate-limiting-ready",
      "auth-ready"
    ],
    version: "1.0.0",
    timestamp: new Date().toISOString()
  };
};

module.exports = {
  buildMcpContext
};
