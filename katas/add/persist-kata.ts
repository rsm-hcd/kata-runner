import { KvStoreContext } from "../../kv-store-context.ts";
import { Kata } from "../kata.ts";

export async function persistKata(kata: Kata): Promise<void> {
  const kv = await KvStoreContext.getKv();
  const key = kata.url.toString();
  const value = kata;
  const result = await kv.set(["kata", key], value);
  console.log("Saved kata result: ", result);
}
