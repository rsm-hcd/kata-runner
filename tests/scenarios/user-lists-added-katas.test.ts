import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext, globalSuite } from "./_global-scenario-setup.test.ts";

describe(globalSuite, "Given a user has no katas configured", () => {
  describe("Given the user adds a kata from github", () => {
    const kataUrl = new URL(
      `https://api.github.com/repos/rsm-hcd/cop-clean-code-katas/contents/kata-templates/hello-world`
    );
    beforeAll(async function (this: GlobalContext) {
      await this.kataFixture.executeAddCommand(kataUrl.href);
    });
    describe("When the user lists their katas", () => {
      let outputString = "";
      beforeAll(async function (this: GlobalContext) {
        outputString = await this.kataFixture.executeListCommand();
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
});
