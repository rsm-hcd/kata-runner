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
  describe("Given the user adds a kata from github", () => {
    const helpFixture = KataFixture.initialize();

    const givenKataUrl = "https://fake-kata.com";
    beforeAll(async () => {
      await helpFixture.executeAddCommand(givenKataUrl);
    });
    describe("When the user lists their katas", () => {
      let outputString = "";
      beforeAll(async () => {
        outputString = await helpFixture.executeListCommand();
      });
      it("Then the user should see their kata in the message", () => {
        assertStringIncludes(
          outputString,
          givenKataUrl,
          "the expected kata was not found in the return message when listing a newly added kata"
        );
      });
    });
  });

  afterAll(async () => {
    await KvFixture.cleanUp();
  });
});
