import { Kata } from "../kata.ts";
import { getInfoFromKata } from "./get-kata-discovery-data.ts";
import { KataDiscoveryData } from "./kata-discovery-data.ts";
import { persistKata } from "./persist-kata.ts";

export async function addKata(url: string): Promise<void> {
  const kataDiscoveryData = await getInfoFromKata(url);
  const kata = convertKataDiscoveryDataToKata(kataDiscoveryData);
  console.log("kata to be added", kata);
  await persistKata(kata);
}

function convertKataDiscoveryDataToKata(
  kataDiscoveryData: KataDiscoveryData
): Kata {
  return {
    name: kataDiscoveryData.name,
    url: kataDiscoveryData.url,
  };
}
