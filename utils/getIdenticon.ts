import { spawn } from "child_process";

export default async function getIdenticon(term: string) {
	return new Promise((resolve, reject) => {
		const elixirApp = spawn("iex", ["-S", "mix"], {
			shell: true,
			// cwd: "identicon-generator",
			timeout: 2000,
		});

		elixirApp.stdout.on("data", (data) => console.log(data.toString()));
		elixirApp.stderr.on("data", (data) => console.log(data.toString()));
		elixirApp.stdin.write(`Identicon.main("${term}")\n`);
		elixirApp.stdin.write(`System.halt\n`);

		elixirApp.on("exit", (exitCode) => {
			if (exitCode !== 0) {
				reject(exitCode);
			}
			resolve(exitCode);
		});
	});
}
