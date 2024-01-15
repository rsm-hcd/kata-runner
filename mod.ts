import { Denomander } from "./deps.ts";
import { registerKataCommands } from "./katas/mod.ts";

function registerCommands(denomander: Denomander) {
  registerKataCommands(denomander);
  denomander.command("test", "its a test").action(() => {
    console.log("TEST!!", import.meta.url);
  });
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

runCliTool();
