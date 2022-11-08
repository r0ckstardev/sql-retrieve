const chalk = require("chalk");
const logfunc = console.log;

//colors

const infoColor = chalk.hex("#82a1ff");
const errColor = chalk.hex("#ff5b3b");
const warningColor = chalk.hex("#f5af2f");
const successColor = chalk.hex("#2ff588");

type Logger = {
    info: (message: string, port?: number) => any;
    warning: (warningMessage: string) => any;
    error: (errorMessage: string) => any;
    success: (message: string) => any;
}

const log: Logger = {
    info: (message: string, port?: number) => {
        logfunc(`[${infoColor("INFO")}]` + `: ${message} ${port}!`)
    },
    success: (message: string) => {
        logfunc(`[${successColor("SUCCESS")}]` + `:${message}`)
    },
    warning: (warningMessage: string) => {
        logfunc(`[${warningColor("WARNING")}]` + `:${warningMessage}`)
    },
    error: (errorMessage: string) => {
        logfunc(`[${errColor("ERROR")}]` + `: ${errorMessage}`)
    }
}
export default { log }
