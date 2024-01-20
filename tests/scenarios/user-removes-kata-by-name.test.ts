import {
  assert,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { KataFixture } from "../kata.fixture.ts";

describe("Given a user has a kata added", () => {
  const helpFixture = KataFixture.initialize();
  const kataUrl = new URL(
    `https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world`
  );

  beforeAll(async () => {
    await helpFixture.executeAddCommand(kataUrl.href);
  });

  it("Then the kata should be listed", async () => {
    const outputString = await helpFixture.executeListCommand();
    assertStringIncludes(
      outputString,
      "hello-world",
      "the expected kata was not found in the return message when listing a newly added kata"
    );
  });

  describe("When the user removes the kata by name", () => {
    let outputString = "";
    beforeAll(async () => {
      outputString = await helpFixture.executeRemoveCommand("hello-world");
    });
    it("Then the user should see a success message with the name of the kata that has been removed", () => {
      assertStringIncludes(
        outputString,
        "hello-world removed successfully!",
        "the expected success message was not found in the output string"
      );
    });
    it("Then the kata should no longer be listed", async () => {
      const outputString = await helpFixture.executeListCommand();
      const findsTheKata = outputString.includes("hello-world");
      assert(
        findsTheKata === false,
        "the kata was still found in the list of katas after it was supposed to be removed"
      );
    });
  });
});
