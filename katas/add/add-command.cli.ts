import { Denomander } from "../../deps.ts";
import { addKata } from "./add-kata.ts";

export function addCommand(denomander: Denomander) {
  denomander
    .subCommand("add [kataUrl]", "add a new kata")
    .argDescription(
      "kataUrl",
      "The url to the root of the repository containing the katas"
    )
    .action(async () => {
      const kata = await addKata(denomander.kataUrl);
      console.log(`${kata.name} added successfully!`);
    });
}
