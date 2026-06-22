const Tool = require("../base/Tool");

class PingTool extends Tool {
    constructor() {
        super(
            "ping",
            "Simple test tool used to verify the executor."
        );
    }

    async execute(input) {

        return {
            message: "Ping executed successfully",
            received: input,
            timestamp: new Date().toISOString(),
        };

    }
}

module.exports = PingTool;