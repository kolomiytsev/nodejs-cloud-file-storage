var bunyan = require("bunyan"); // Bunyan dependency
var logger = bunyan.createLogger({
    name: "cfsLogger",
    streams: [
        {
            level: 'info',
            type: 'rotating-file',
            path: '/infoLogger.log',
            period: '2d'
        },
        {
            level: 'warn',
            type: 'rotating-file',
            path: '/warnLogger.log',
            period: '2d'
        },
        {
            level: 'error',
            type: 'rotating-file',
            path: '/errorLogger.log',
            period: '2d'
        }
    ]});

module.exports = logger;