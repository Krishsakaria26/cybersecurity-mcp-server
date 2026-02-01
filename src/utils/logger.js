const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "..", "..", "logs");
const logFile = path.join(logsDir, "audit.log");

/* Ensure logs directory exists */
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

/**
 * Write structured audit logs
 */
const auditLog = (event) => {
  const logEntry = {
    timestamp: new Date().toISOString(),
    ...event
  };

  fs.appendFile(
    logFile,
    JSON.stringify(logEntry) + "\n",
    (err) => {
      if (err) {
        console.error("Failed to write audit log", err);
      }
    }
  );
};

module.exports = {
  auditLog
};
