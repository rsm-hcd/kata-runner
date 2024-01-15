export abstract class CliAdapter {
  constructor() {}

  protected async runCommand(command: Deno.Command): Promise<string> {
    const output = await command.output();
    const outputString = new TextDecoder().decode(output.stdout);
    return outputString;
  }
}
