class ToolRegistry {

    constructor() {
        this.tools = new Map();
    }

    register(tool) {

        if (this.tools.has(tool.name)) {
            throw new Error(`Tool '${tool.name}' already registered.`);
        }

        this.tools.set(tool.name, tool);

    }

    get(name) {

        return this.tools.get(name);

    }

    list() {

        return Array.from(this.tools.values()).map(tool =>
            tool.getMetadata()
        );

    }

}

module.exports = ToolRegistry;