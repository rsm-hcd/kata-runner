import { createFolder } from "./file-system/mod.ts";

export class KvStoreContext {
  private static kvStoreName = "kata-runner-store";
  private static kv: Deno.Kv | null = null;
  private constructor() {}

  static async getKv(): Promise<Deno.Kv> {
    if (KvStoreContext.kv) {
      return KvStoreContext.kv;
    }
    KvStoreContext.kv = await KvStoreContext.createKv();
    return KvStoreContext.kv;
  }

  static closeKv(): void {
    if (KvStoreContext.kv) {
      KvStoreContext.kv.close();
      KvStoreContext.kv = null;
    }
  }

  private static async createKv(): Promise<Deno.Kv> {
    const workingDirectory = Deno.env.get("WORKING_DIRECTORY");
    if (workingDirectory) {
      const kvStoreLocation = `${workingDirectory}/${KvStoreContext.kvStoreName}`;
      const kv = await Deno.openKv(kvStoreLocation);

      return Promise.resolve(kv);
    }
    const home = Deno.env.get("HOME");
    await createFolder(`${home}/kata-runner`);
    const kv = await Deno.openKv(
      `${home}/kata-runner/${KvStoreContext.kvStoreName}`
    );
    return kv;
  }
}
