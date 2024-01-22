import { assertStringIncludes, beforeAll, describe, it } from "../../deps.ts";
import { GlobalContext } from "./_global-scenario-setup.test.ts";
import { kataAddedSuite } from "./user-adds-a-kata-from-github-successfully.test.ts";

export const kataIsListedSuite = describe(
  kataAddedSuite,
  "When the user lists their katas",
  () => {
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
  }
);
