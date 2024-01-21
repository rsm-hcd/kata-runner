import {
  afterAll,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { DirectoryFixture } from "../directory.fixture.ts";
import { KataFixture } from "../kata.fixture.ts";

describe("Given a user has no katas configured", () => {
  describe("Given the user adds a kata from github", () => {
    const helpFixture = KataFixture.initialize();

    const kataUrl = new URL(
      `https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world`
    );
    beforeAll(async () => {
      await helpFixture.executeAddCommand(kataUrl.href);
    });
    describe("When the user lists their katas", () => {
      let outputString = "";
      beforeAll(async () => {
        outputString = await helpFixture.executeListCommand();
      });
      it("Then the user should see their kata in the message", () => {
        assertStringIncludes(
          outputString,
          "hello-world",
          "the expected kata was not found in the return message when listing a newly added kata"
        );
      });
    });
  });

  afterAll(async () => {
    const directoryFixture = await DirectoryFixture.initialize();
    await directoryFixture.cleanUp();
  });
});
