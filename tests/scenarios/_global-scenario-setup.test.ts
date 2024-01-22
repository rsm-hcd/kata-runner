import { describe } from "../../deps.ts";
import { DirectoryFixture } from "../directory.fixture.ts";
import { HelpFixture } from "../help.fixture.ts";
import { KataFixture } from "../kata.fixture.ts";

export interface GlobalContext {
  directoryFixture: DirectoryFixture;
  kataFixture: KataFixture;
  helpFixture: HelpFixture;
}

export const globalSuite = describe({
  name: "Global Suite",
  async beforeAll(this: GlobalContext) {
    this.directoryFixture = await DirectoryFixture.initialize();
    this.kataFixture = KataFixture.initialize();
    this.helpFixture = HelpFixture.initialize();
  },
  async afterAll(this: GlobalContext) {
    await this.directoryFixture.cleanUp();
  },
});
