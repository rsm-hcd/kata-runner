import { deleteFilesIfExists } from "./file-system/delete-file.ts";

export class KvStoreContext {
  private static kv: Deno.Kv | null = null;
  private constructor() {}

  static async getKv(): Promise<Deno.Kv> {
    if (KvStoreContext.kv) {
      return KvStoreContext.kv;
    }
    KvStoreContext.kv = await KvStoreContext.createKv();
    return KvStoreContext.kv;
  }

  static async closeKv(): Promise<void> {
    if (KvStoreContext.kv) {
      KvStoreContext.kv.close();
      KvStoreContext.kv = null;
    }
  }

  static async deleteKv(): Promise<void> {
    const kvStoreLocation = Deno.env.get("KV_STORE_LOCATION");
    if (!kvStoreLocation) {
      return Promise.reject(
        new Error("KV_STORE_LOCATION environment variable not set")
      );
    }

    await deleteFilesIfExists([
      kvStoreLocation,
      `${kvStoreLocation}-shm`,
      `${kvStoreLocation}-wal`,
    ]);
  }

  private static async createKv(): Promise<Deno.Kv> {
    const kvStoreLocation = Deno.env.get("KV_STORE_LOCATION");
    if (kvStoreLocation) {
      const kv = await Deno.openKv(kvStoreLocation);
      return Promise.resolve(kv);
    }
    const kv = await Deno.openKv();
    return kv;
  }
}
