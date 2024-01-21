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
        // now we need to actually hydrate the directory from github
        // i changed the store name. I wonder how this works when i just run the tool
        // if i have to run the tool to know how it works then i need to get that in the tests
        // so i maintain 100% confidence in the tests
        await beginKata(
          denomander.kataName,
          `${denomander.directory}/${denomander.kataName}`
        );
        console.log(
          `Directory hydrated successfully for Kata: ${denomander.kataName}`
        );
      } catch (error) {
        console.log(error.message);
      }
    });
}
