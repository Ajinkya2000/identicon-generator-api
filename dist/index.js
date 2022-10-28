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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const child_process_1 = require("child_process");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.get("/identicon/:term", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const term = req.params.term;
    // const exitCode = await getIdenticon(term);
    // const parentDir = path.dirname(__dirname);
    // res.sendFile(parentDir + `/identicon-generator/${term}.png`);
    const outputBuffer = (0, child_process_1.execSync)("elixir -v");
    console.log(outputBuffer.toString());
    res.send(term);
}));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
