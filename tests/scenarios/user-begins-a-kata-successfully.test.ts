import {
  assert,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { DirectoryFixture } from "../directory.fixture.ts";
import { KataFixture } from "../kata.fixture.ts";

describe("Given a user has a kata added", () => {
  const helpFixture = KataFixture.initialize();
  let directoryFixture: DirectoryFixture;
  const kataUrl = new URL(
    `https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world`
  );

  beforeAll(async () => {
    directoryFixture = await DirectoryFixture.initialize();
    await helpFixture.executeAddCommand(kataUrl.href);
  });

  describe("When the user begins the kata by name", () => {
    let outputString = "";
    beforeAll(async () => {
      outputString = await helpFixture.executeBeginCommand("hello-world");
    });
    it("Then the user should see a success message with the name of the kata that has been removed", () => {
      assertStringIncludes(
        outputString,
        "Directory hydrated successfully for Kata: hello-world",
        "the expected success message was not found in the output string"
      );
    });

    it("Then the user should have the kata's files in the directory", async () => {
      const doesDirectoryExist =
        await directoryFixture.doesDirectoryContainFiles("hello-world");
      assert(doesDirectoryExist, "the directory was not created");
    });
  });
});
