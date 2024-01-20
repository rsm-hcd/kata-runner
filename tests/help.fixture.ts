import { CliAdapter } from "./cli.adapter.ts";
export class HelpFixture extends CliAdapter {
  private constructor() {
    super();
  }

  static initialize(): HelpFixture {
    return new HelpFixture();
  }

  async executeHelpCommand(): Promise<string> {
    const textResponse = await this.runCommand(["--help"]);
    return textResponse;
  }
}
