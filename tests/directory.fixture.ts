import { emptyDir, ensureDir } from "../deps.ts";

export class DirectoryFixture {
  private static workingDirectoryPath = "./tests/test-sandbox";
  private constructor() {}

  static async initialize(): Promise<DirectoryFixture> {
    await this.ensureTestDirectoryExists();
    return new DirectoryFixture();
  }

  static async ensureTestDirectoryExists(): Promise<void> {
    await ensureDir(this.workingDirectoryPath);
  }

  async doesDirectoryContainFiles(directoryPath: string): Promise<boolean> {
    const fullPath = `${DirectoryFixture.workingDirectoryPath}/${directoryPath}`;
    const directoryContentNames = await this.getFileNamesInDirectory(fullPath);
    console.log(
      "AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
      fullPath,
      directoryContentNames
    );
    return directoryContentNames.length > 0;
  }

  async cleanUp(): Promise<void> {
    await emptyDir(DirectoryFixture.workingDirectoryPath);
  }

  private async getFileNamesInDirectory(
    directoryPath: string
  ): Promise<string[]> {
    const directoryContents = await Deno.readDir(directoryPath);
    const directoryContentNames = [];
    for await (const directoryContent of directoryContents) {
      directoryContentNames.push(directoryContent.name);
    }
    return directoryContentNames;
  }
}
