import {
  afterAll,
  assertStringIncludes,
  beforeAll,
  describe,
  it,
} from "../../deps.ts";
import { GithubResult } from "../../github-integration/github-result.ts";
import { FetchFixture } from "../fetch.fixture.ts";
import { GithubResultBuilder } from "../github-result.builder.ts";
import { KataFixture } from "../kata.fixture.ts";
import { KvFixture } from "../kv.fixture.ts";

describe("Given a user has no katas configured", () => {
  describe("When the user adds a kata from github", () => {
    const kataUrl = new URL("https://github.com/fake-place/my-kata");
    const githubResult: GithubResult = GithubResultBuilder.init().build();
    beforeAll(() => {
      FetchFixture.replaceFetch();
      FetchFixture.mockGetRequest("/fake-place/my-kata", githubResult);
    });
    describe("Given only the url", () => {
      let outputString = "";

      const expectedSuccessMessage = "my-kata added successfully!";
      beforeAll(async () => {
        const helpFixture = KataFixture.initialize();
        outputString = await helpFixture.executeAddCommand(kataUrl.href);
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

  afterAll(async () => {
    await KvFixture.cleanUp();
  });
});
