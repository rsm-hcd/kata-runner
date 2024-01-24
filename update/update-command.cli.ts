import { Denomander } from "../deps.ts";

export function registerUpdateCommand(denomander: Denomander) {
  denomander
    .command("update", "Update kata-runner to latest version")
    .action(() => {
      const command = new Deno.Command("deno", {
        args: ["cache", "--reload", import.meta.url],
      });

      command.outputSync();
      console.log("Update katas to latest version", import.meta.url);
    });
}
