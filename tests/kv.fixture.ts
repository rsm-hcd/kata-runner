import { KvStoreContext } from "../kv-store-context.ts";

export class KvFixture {
  private constructor() {}

  static async cleanUp(): Promise<void> {
    await KvStoreContext.closeKv();
    await KvStoreContext.deleteKv();
  }
}
