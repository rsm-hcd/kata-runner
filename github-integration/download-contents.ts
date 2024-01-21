import { GithubResult } from "./github-result.ts";

export async function downloadContents(
  sourceUrl: string
): Promise<GithubResult[]> {
  const response = await fetch(sourceUrl);

  if (!response.ok) {
    throw new Error(`Failed to fetch folder contents: ${response.statusText}`);
  }

  const folderContents = await response.json();
  return folderContents as GithubResult[];
}
