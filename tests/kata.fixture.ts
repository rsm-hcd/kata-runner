import { CliAdapter } from "./cli.adapter.ts";
export class KataFixture extends CliAdapter {
  private constructor() {
    super();
  }

  static initialize(): KataFixture {
    return new KataFixture();
  }

  async executeAddCommand(url: string): Promise<string> {
    const textResponse = await this.runCommand(["kata", "add", url]);
    return textResponse;
  }

  async executeListCommand(): Promise<string> {
    const textResponse = await this.runCommand(["kata", "list"]);
    return textResponse;
  }

  async executeRemoveCommand(name: string): Promise<string> {
    const textResponse = await this.runCommand(["kata", "remove", name]);
    return textResponse;
  }
}
