import chalk from "chalk";
const logfunc = console.log;
const infoColor = chalk.hex("#82a1ff");
const infoTextColor = chalk.hex("#59b2ff");
const log = {
    info: (message, port) => {
        logfunc(`[${infoColor("INFO")}]` + infoTextColor(`: ${message} ${port}!`));
    }
};
export default log;
//# sourceMappingURL=index.js.map