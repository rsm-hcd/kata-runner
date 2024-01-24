import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext, globalSuite } from "./_global-scenario-setup.test.ts";

describe(
  globalSuite,
  "Given a user has a fresh installation of the tool",
  () => {
    describe("When the user begins a kata by a name that isn't registered", () => {
      let outputString = "";
      beforeAll(async function (this: GlobalContext) {
        outputString = await this.kataFixture.executeBeginCommand(
          "nonexistent-kata"
        );
      });
      it("Then the user should see a error message with the name of the kata that it cant find", () => {
        assertStringIncludes(
          outputString,
          `A kata by the name of "nonexistent-kata" could not be found. Try adding this kata first.`,
          "the expected error message was not found in the output string"
        );
      });
    });
  }
);
