import {
  assert,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { GlobalContext } from "./_global-scenario-setup.test.ts";
import { kataIsListedSuite } from "./user-lists-added-katas.test.ts";

describe(kataIsListedSuite, "Given a user has a kata added", () => {
  describe("When the user removes the kata by name", () => {
    let outputString = "";
    beforeAll(async function (this: GlobalContext) {
      outputString = await this.kataFixture.executeRemoveCommand("hello-world");
    });
    it("Then the user should see a success message with the name of the kata that has been removed", () => {
      assertStringIncludes(
        outputString,
        "hello-world removed successfully!",
        "the expected success message was not found in the output string"
      );
    });
    it("Then the kata should no longer be listed", async function (this: GlobalContext) {
      const outputString = await this.kataFixture.executeListCommand();
      const findsTheKata = outputString.includes("hello-world");
      assert(
        findsTheKata === false,
        "the kata was still found in the list of katas after it was supposed to be removed"
      );
    });
  });
});
