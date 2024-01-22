import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext, globalSuite } from "./_global-scenario-setup.test.ts";

describe(globalSuite, "given kata CLI is installed", () => {
  describe("when the user is looking for help", () => {
    describe("given no arguments", () => {
      describe("should see the app's: ", () => {
        let outputString = "";
        beforeAll(async function (this: GlobalContext) {
          outputString = await this.helpFixture.executeHelpCommand();
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
});
