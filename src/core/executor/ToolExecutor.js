class ToolExecutor {
    constructor(registry) {
        this.registry = registry;
    }

    async execute(toolName, input = {}) {
        const tool = this.registry.get(toolName);

        if (!tool) {
            throw new Error(`Tool '${toolName}' not found.`);
        }

        const startTime = Date.now();

        try {
            const result = await tool.execute(input);

            return {
                success: true,
                tool: tool.name,
                executionTime: `${Date.now() - startTime} ms`,
                timestamp: new Date().toISOString(),
                data: result
            };

        } catch (error) {

            return {
                success: false,
                tool: tool.name,
                executionTime: `${Date.now() - startTime} ms`,
                timestamp: new Date().toISOString(),
                error: error.message
            };

        }
    }
}

module.exports = ToolExecutor;