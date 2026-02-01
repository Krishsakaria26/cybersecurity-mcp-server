const path = require("path");
const winston = require("winston");
require("winston-daily-rotate-file");

const logsDir = path.join(__dirname, "..", "..", "logs");

/* Daily rotating audit log */
const auditTransport = new winston.transports.DailyRotateFile({
  dirname: logsDir,
  filename: "audit-%DATE%.log",
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "7d" // retain logs for 7 days
});

/* Logger instance */
const auditLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    auditTransport,
    new winston.transports.Console({ silent: true }) // no console spam
  ]
});

/**
 * Audit logging helper
 */
const auditLog = (event) => {
  auditLogger.info(event);
};

module.exports = {
  auditLog
};
