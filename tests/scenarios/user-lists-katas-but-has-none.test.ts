import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext, globalSuite } from "./_global-scenario-setup.test.ts";

export const freshInstallationSuite = describe(
  globalSuite,
  "Given a user has a fresh installation of the tool",
  () => {
    describe("when the user lists their katas", () => {
      let outputString = "";
      const expectedMessage = "There are no katas added on this machine.";
      beforeAll(async function (this: GlobalContext) {
        outputString = await this.kataFixture.executeListCommand();
      });
      it("then the user should see a message indicating they have no katas configured", () => {
        assertStringIncludes(
          outputString,
          expectedMessage,
          "the expected message was not found when listing katas with none configured"
        );
      });
    });
  }
);
