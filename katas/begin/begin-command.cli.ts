import { Denomander } from "../../deps.ts";
import { beginKata } from "./begin-kata.ts";

export function beginCommand(denomander: Denomander) {
  denomander
    .subCommand("begin [kataName]", "Begin a Kata from the list of known Katas")
    .argDescription("kataName", "The name of the kata to be started")
    .option(
      "-d, --directory",
      "The directory to create the kata in",
      (directory: string) => directory.replace(/\/$/, ""),
      Deno.env.get("WORKING_DIRECTORY") ?? "./"
    )
    .action(async () => {
      try {
        await beginKata(
          denomander.kataName,
          `${denomander.directory}/${denomander.kataName}`
        );
        console.log(
          `Directory hydrated successfully for Kata: ${denomander.kataName}`
        );
      } catch (error) {
        console.log(`%c${error.message}`, "color: red");
      }
    });
}
