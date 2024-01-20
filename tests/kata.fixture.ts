import { CliAdapter } from "./cli.adapter.ts";
export class KataFixture extends CliAdapter {
  private constructor() {
    super();
  }

  static initialize(): KataFixture {
    return new KataFixture();
  }

  async executeAddCommand(url: string): Promise<string> {
    const command = new Deno.Command("deno", {
      args: [
        "run",
        "--allow-all",
        "--unstable",
        "./mod.ts",
        "kata",
        "add",
        url,
      ],
    });
    const textResponse = await this.runCommand(command);
    return textResponse;
  }

  async executeListCommand(): Promise<string> {
    const command = new Deno.Command("deno", {
      args: ["run", "--allow-all", "--unstable", "./mod.ts", "kata", "list"],
    });
    const textResponse = await this.runCommand(command);
    return textResponse;
  }

  executeRemoveCommand(name: string): Promise<string> {
    const command = new Deno.Command("deno", {
      args: [
        "run",
        "--allow-all",
        "--unstable",
        "./mod.ts",
        "kata",
        "remove",
        name,
      ],
    });
    return this.runCommand(command);
  }
}
