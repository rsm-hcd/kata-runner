import { KvStoreContext } from "../../kv-store-context.ts";

export async function removeKataByName(name: string) {
  const kv = await KvStoreContext.getKv();
  await kv.delete(["kata", name]);
}
