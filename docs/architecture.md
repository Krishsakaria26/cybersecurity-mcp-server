## MCP Context Versioning

- MCP Spec: `mcp/1.0`
- Context Version: `2026-02-01`

All MCP responses include a metadata envelope describing
the supported MCP spec and the context schema version.

Clients must not assume backward compatibility across
different `context_version` values.
