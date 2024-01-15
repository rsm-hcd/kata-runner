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
  describe("When the user adds a kata", () => {
    describe("And the kata is valid", () => {
      let outputString = "";
      const givenKataUrl = "https://fake-kata.com";
      const expectedSuccessMessage = "Kata added successfully!";
      beforeAll(async () => {
        const helpFixture = KataFixture.initialize();
        outputString = await helpFixture.executeAddCommand(givenKataUrl);
      });
      it("Then the user should see a success message", () => {
        assertStringIncludes(
          outputString,
          expectedSuccessMessage,
          "the expected success message was not found in the output string"
        );
      });
    });
  });

  afterAll(async () => {
    await KvFixture.cleanUp();
  });
});
