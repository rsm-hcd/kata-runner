export abstract class CliAdapter {
  constructor() {}

  protected buildBaseCommandArgs(): string[] {
    const args = ["run", "--allow-all", "--unstable", "./mod.ts"];
    return args;
  }

  protected async runCommand(commandArgs: string[]): Promise<string> {
    const baseArgs = this.buildBaseCommandArgs();
    const command = new Deno.Command("deno", {
      args: [...baseArgs, ...commandArgs],
    });
    const output = await command.output();
    const outputString = new TextDecoder().decode(output.stdout);
    return outputString;
  }
}
