import { GithubResult } from "./github-result.ts";

export async function getFileFromGithub(
  fileUrl: string
): Promise<GithubResult> {
  const response = await fetch(fileUrl);
  const unTypedResult = await response.json();
  ThrowIfArray(unTypedResult, fileUrl);
  const githubResult = castToGithubResult(unTypedResult);
  throwIfTypeIsNotFile(githubResult);
  return githubResult;
}

function castToGithubResult(unTypedResult: any): GithubResult {
  return unTypedResult as GithubResult;
}

function ThrowIfArray(value: any, fileUrl: string): void {
  if (Array.isArray(value)) {
    throw new Error(`Not a file: ${fileUrl}`);
  }
}

function throwIfTypeIsNotFile(githubResult: GithubResult): void {
  if (githubResult.type !== "file") {
    throw new Error(`Not a file: ${githubResult.download_url}`);
  }
}
