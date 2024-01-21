import {
  afterAll,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { DirectoryFixture } from "../directory.fixture.ts";
import { HelpFixture } from "../help.fixture.ts";

describe("given kata CLI is installed", () => {
  describe("when the user is looking for help", () => {
    describe("given no arguments", () => {
      describe("should see the app's: ", async () => {
        let outputString = "";
        beforeAll(async () => {
          const helpFixture = HelpFixture.initialize();
          outputString = await helpFixture.executeHelpCommand();
        });

        it("name", () => {
          assertStringIncludes(outputString, "Kata Runner");
        });

        it("description ", () => {
          assertStringIncludes(outputString, "Description");
        });

        it("options ", () => {
          assertStringIncludes(outputString, "Options");
        });

        it("Commands ", () => {
          assertStringIncludes(outputString, "Commands");
        });
      });
    });
  });

  afterAll(async () => {
    const directoryFixture = await DirectoryFixture.initialize();
    await directoryFixture.cleanUp();
  });
});
