import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

import getIdenticon from "./utils/getIdenticon";

dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get("/identicon/:term", async (req: Request, res: Response) => {
	const term = req.params.term;

	try {
		const exitCode = await getIdenticon(term);
		const parentDir = path.dirname(__dirname);
		res.sendFile(parentDir + `/${term}.png`);
	} catch(err) {
		console.log(err);
		res.status(500).json({'error': 'Something went wrong!'})
	}
});

app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
