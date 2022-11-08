"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const logfunc = console.log;
//colors
const infoColor = chalk.hex("#82a1ff");
const errColor = chalk.hex("#ff5b3b");
const warningColor = chalk.hex("#f5af2f");
const successColor = chalk.hex("#2ff588");
const log = {
    info: (message, port) => {
        logfunc(`[${infoColor("INFO")}]` + `: ${message} ${port}!`);
    },
    success: (message) => {
        logfunc(`[${successColor("SUCCESS")}]` + `:${message}`);
    },
    warning: (warningMessage) => {
        logfunc(`[${warningColor("WARNING")}]` + `:${warningMessage}`);
    },
    error: (errorMessage) => {
        logfunc(`[${errColor("ERROR")}]` + `: ${errorMessage}`);
    }
};
exports.default = { log };
