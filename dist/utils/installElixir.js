"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
(() => {
    const outputBuffer = (0, child_process_1.execSync)("whoami");
    const outputBuffer2 = (0, child_process_1.execSync)("lsb_release -a");
    console.log("WHOAMI: ", outputBuffer.toString());
    console.log("VERSION: ", outputBuffer2.toString());
})();
