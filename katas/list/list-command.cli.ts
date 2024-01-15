import { Denomander } from "../../deps.ts";
import { listKatas } from "./list-katas.ts";

export function listCommand(denomander: Denomander) {
  denomander
    .subCommand("list", "list all of the currently registered katas")
    .action(async () => {
      const katas = await listKatas();
      if (katas.length === 0) {
        console.log("There are no katas added on this machine.");
      }
      console.log("katas:", katas);
    });
}
