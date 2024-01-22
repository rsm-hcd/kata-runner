import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext, globalSuite } from "./_global-scenario-setup.test.ts";

describe(globalSuite, "Given a user has no katas configured", () => {
  describe("When the user adds a kata from github", () => {
    const kataUrl = new URL(
      `https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world`
    );
    describe("Given only the url", () => {
      let outputString = "";

      const expectedSuccessMessage = "hello-world added successfully!";
      beforeAll(async function (this: GlobalContext) {
        outputString = await this.kataFixture.executeAddCommand(kataUrl.href);
      });
      it("Then the user should see a success message with the name of the folder the kata is found in", () => {
        assertStringIncludes(
          outputString,
          expectedSuccessMessage,
          "the expected success message was not found in the output string"
        );
      });
    });
  });
});
