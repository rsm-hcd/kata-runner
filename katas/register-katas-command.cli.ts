import { Denomander } from "../deps.ts";
import { addCommand } from "./add/mod.ts";
import { listCommand } from "./list/mod.ts";

export function registerKataCommands(denomander: Denomander) {
  const parent = denomander.command("kata");
  listCommand(parent);
  addCommand(parent);
}
