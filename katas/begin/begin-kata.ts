import { createFolder } from "../../file-system/mod.ts";
import { downloadContents } from "../../github-integration/mod.ts";
import { KvStoreContext } from "../../kv-store-context.ts";
import { Kata } from "../kata.ts";

export async function beginKata(
  kataName: string,
  destinationDirectory: string
): Promise<void> {
  const kataDownloadUrl = await getKataDownloadUrl(kataName);
  if (!kataDownloadUrl) {
    throw new Error(
      `A kata by the name of "${kataName}" could not be found. Try adding this kata first.`
    );
  }
  await recursiveCopy(kataDownloadUrl, destinationDirectory);
}

async function getKataDownloadUrl(kataName: string): Promise<string> {
  const kv = await KvStoreContext.getKv();
  const kataMaybe = await kv.get<Kata>(["kata", kataName]);
  const kataDownloadUrl = kataMaybe.value?.url ?? "";
  return kataDownloadUrl;
}

async function recursiveCopy(
  kataDownloadUrl: string,
  localFolderPath: string
): Promise<void> {
  const githubResults = await downloadContents(kataDownloadUrl);
  // Create the destination directory if it doesn't exist
  await createFolder(localFolderPath);

  // Download each file from the folder
  for (const file of githubResults) {
    const localFilePath = `${localFolderPath}/${file.name}`;
    if (file.type === "file") {
      // Download and write file content
      const fileUrl = file.download_url;
      if (!fileUrl) {
        throw new Error(`No download URL found for file: ${file.name}`);
      }
      const fileResponse = await fetch(fileUrl);

      if (!fileResponse.ok) {
        throw new Error(`Failed to download file: ${file.name}`);
      }

      const fileContent = await fileResponse.text();
      await Deno.writeTextFile(localFilePath, fileContent);
    }

    // Recursive call for subdirectories
    if (file.type === "dir") {
      await recursiveCopy(file.path, localFilePath);
    }
  }
}
