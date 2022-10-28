"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function getIdenticon(term) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const elixirApp = (0, child_process_1.spawn)("iex", ["-S", "mix"], {
                shell: true,
                cwd: "identicon-generator",
                timeout: 2000,
            });
            elixirApp.stdout.on("data", (data) => console.log(data.toString()));
            elixirApp.stdin.write(`Identicon.main("${term}")\n`);
            elixirApp.stdin.write(`System.halt\n`);
            elixirApp.on("exit", (exitCode) => {
                if (exitCode !== 0) {
                    reject(exitCode);
                }
                resolve(exitCode);
            });
        });
    });
}
exports.default = getIdenticon;
