export async function createFolder(folderPath: string): Promise<void> {
  await Deno.mkdir(folderPath, { recursive: true });
}
