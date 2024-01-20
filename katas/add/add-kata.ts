import { doesDirectoryExist } from "../../github-integration/mod.ts";
import { Kata } from "../kata.ts";
import { persistKata } from "./persist-kata.ts";

export async function addKata(url: string): Promise<Kata> {
  const name = url.split("/").pop() as string;
  return await addKataWithName(name, url);
}

export async function addKataWithName(
  name: string,
  url: string
): Promise<Kata> {
  await validateGithubUrl(url);
  const kata = buildKata(name, url);
  await persistKata(kata);
  return kata;
}

async function validateGithubUrl(url: string): Promise<void> {
  const directoryExists = await doesDirectoryExist(url);
  if (!directoryExists) {
    throw new Error("Not a directory");
  }
}

function buildKata(name: string, url: string): Kata {
  return {
    name: name,
    url: url,
  };
}
