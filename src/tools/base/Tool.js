class Tool {
    constructor(name, description, version = "1.0.0") {
        this.name = name;
        this.description = description;
        this.version = version;
    }

    async execute(input) {
        throw new Error(
            `${this.name} must implement the execute() method`
        );
    }

    getMetadata() {
        return {
            name: this.name,
            description: this.description,
            version: this.version,
        };
    }
}

module.exports = Tool;