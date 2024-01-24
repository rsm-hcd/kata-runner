import {
  assert,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { createFolder } from "../../file-system/mod.ts";
import { GlobalContext } from "./_global-scenario-setup.test.ts";
import { kataIsListedSuite } from "./user-lists-added-katas.test.ts";

describe(kataIsListedSuite, "Given the user has a kata added", () => {
  beforeAll(async () => {
    await createFolder("tests/test-sandbox/hello-world");
  });

  describe("When the user begins the kata by name", () => {
    let outputString = "";
    beforeAll(async function (this: GlobalContext) {
      outputString = await this.kataFixture.executeBeginCommand("hello-world");
    });
    it("Then the user should see a success message with the name of the kata that has been removed", () => {
      assertStringIncludes(
        outputString,
        "Directory hydrated successfully for Kata: hello-world",
        "the expected success message was not found in the output string"
      );
    });

    it("Then the user should have the kata's files in the directory", async function (this: GlobalContext) {
      const doesDirectoryExist =
        await this.directoryFixture.doesDirectoryContainFiles("hello-world");
      assert(doesDirectoryExist, "the directory was not created");
    });
  });
});
