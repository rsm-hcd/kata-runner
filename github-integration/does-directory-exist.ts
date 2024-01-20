export async function doesDirectoryExist(url: string): Promise<boolean> {
  const response = await fetch(url);
  const unTypedResult = await response.json();
  if (!unTypedResult) {
    return false;
  }
  return true;
}
// https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world
