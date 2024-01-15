import { KvStoreContext } from "../../kv-store-context.ts";
import { Kata } from "../kata.ts";

export async function listKatas(): Promise<Kata[]> {
  const foundKatas: Kata[] = [];
  const kv = await KvStoreContext.getKv();
  const entryIterator = kv.list<Kata>({ prefix: ["kata"] });
  for await (const entry of entryIterator) {
    foundKatas.push(entry.value);
  }
  return Promise.resolve(foundKatas);
}
