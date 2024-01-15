import { CliAdapter } from "./cli.adapter.ts";
export class HelpFixture extends CliAdapter {
  private constructor() {
    super();
  }

  static initialize(): HelpFixture {
    return new HelpFixture();
  }

  async executeHelpCommand(): Promise<string> {
    const command = new Deno.Command("deno", {
      args: ["run", "--allow-all", "./mod.ts", "--help"],
    });
    const textResponse = await this.runCommand(command);
    return textResponse;
  }
}
