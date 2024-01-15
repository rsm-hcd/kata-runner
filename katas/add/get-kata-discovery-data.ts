import { KataDiscoveryData } from "./kata-discovery-data.ts";

export async function getInfoFromKata(url: string): Promise<KataDiscoveryData> {
  const kataDiscoveryData: KataDiscoveryData = {
    name: "fake kata",
    url: url,
  };
  return Promise.resolve(kataDiscoveryData);
}
