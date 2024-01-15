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
      console.log(denomander.kataUrl);
      console.log("Kata added successfully!");
      await addKata(denomander.kataUrl);
    });
}
