import { exists } from "../deps.ts";

export async function deleteFileIfExists(filePath: string): Promise<void> {
  const doesFileExist = await exists(filePath);
  if (!doesFileExist) {
    return Promise.resolve();
  }
  await Deno.remove(filePath);
}

export async function deleteFilesIfExists(filePaths: string[]): Promise<void> {
  for (const filePath of filePaths) {
    await deleteFileIfExists(filePath);
  }
}
