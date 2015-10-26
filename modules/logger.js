var bunyan = require("bunyan"); // Bunyan dependency
var logger = bunyan.createLogger({
    name: "cfsLogger",
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'warn',
            type: 'rotating-file',
            path: '../warnLogger.log',
            period: '2d'
        },
        {
            level: 'error',
            type: 'rotating-file',
            path: '../errorLogger.log',
            period: '2d'
        }
    ]}
);

module.exports = logger;