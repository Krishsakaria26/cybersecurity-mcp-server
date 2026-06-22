const ToolRegistry = require("./core/registry/ToolRegistry");
const ToolExecutor = require("./core/executor/ToolExecutor");
const PingTool = require("./tools/examples/PingTool");

// Create Registry
const registry = new ToolRegistry();

// Register Tool
registry.register(new PingTool());

// Create Executor
const executor = new ToolExecutor(registry);

// Execute Tool
(async () => {
    const result = await executor.execute("nmap", {
        host: "localhost"
    });

    console.log(result);
})();