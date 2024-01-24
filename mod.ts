import { Denomander } from "./deps.ts";
import { registerKataCommands } from "./katas/mod.ts";
import { registerUpdateCommand } from "./update/mod.ts";

function registerCommands(denomander: Denomander) {
  registerKataCommands(denomander);
  registerUpdateCommand(denomander);
}

function runCliTool() {
  const program = new Denomander({
    app_name: "Kata Runner",
    app_description: "A tool for creating kata templates",
    app_version: "0.0.1",
  });

  registerCommands(program);

  program.parse(Deno.args);
}

try {
  runCliTool();
} catch (error) {
  console.log(`%c${error.message}`, "color: red");
}
