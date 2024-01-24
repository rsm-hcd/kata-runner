import { Denomander } from "../../deps.ts";
import { removeKataByName } from "./remove-kata-by-name.ts";

export function removeCommand(denomander: Denomander) {
  denomander
    .subCommand("remove [kataName]", "Remove All Katas")
    .argDescription("kataName", "The name of the kata to be removed")
    .action(async () => {
      await removeKataByName(denomander.kataName);
      console.log(`${denomander.kataName} removed successfully!`);
    });
}
