import {
  afterAll,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { KataFixture } from "../kata.fixture.ts";
import { KvFixture } from "../kv.fixture.ts";

describe("Given a user has no katas configured", () => {
  describe("when the user lists their katas", () => {
    let outputString = "";
    const expectedMessage = "There are no katas added on this machine.";
    beforeAll(async () => {
      const helpFixture = KataFixture.initialize();
      outputString = await helpFixture.executeListCommand();
    });
    it("then the user should see a message indicating they have no katas configured", () => {
      assertStringIncludes(
        outputString,
        expectedMessage,
        "the expected message was not found when listing katas with none configured"
      );
    });
  });

  afterAll(async () => {
    await KvFixture.cleanUp();
  });
});
