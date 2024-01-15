import { GithubResult } from "../github-integration/github-result.ts";

export class GithubResultBuilder {
  private name: string = "test-name";
  private path: string = "test/path";
  private repoOwner: string = "fake-owner";
  private repoName: string = "fake-repo";

  private constructor() {}

  static init(): GithubResultBuilder {
    return new GithubResultBuilder();
  }

  withName(name: string): GithubResultBuilder {
    this.name = name;
    return this;
  }

  withPath(path: string): GithubResultBuilder {
    this.path = path;
    return this;
  }

  withRepoName(repoName: string): GithubResultBuilder {
    this.repoName = repoName;
    return this;
  }

  withRepoOwner(repoOwner: string): GithubResultBuilder {
    this.repoOwner = repoOwner;
    return this;
  }

  build(): GithubResult {
    return {
      name: this.name,
      path: this.path,
      sha: "1234abcd",
      size: 1080,
      url: `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${this.path}`,
      html_url: `https://github.com/${this.repoOwner}/${this.repoName}/blob/main/${this.path}`,
      git_url: `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/git/blobs/`,
      download_url: `https://raw.githubusercontent.com/${this.repoOwner}/${this.repoName}/main/${this.path}`,
      type: `file`,
      _links: {
        self: `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/contents/${this.path}?ref=main`,
        git: `https://api.github.com/repos/${this.repoOwner}/${this.repoName}/git/blobs/2ed5ec7628bb175005022a2aa89cdbea`,
        html: `https://github.com/${this.repoOwner}/${this.repoName}/blob/main/${this.path}`,
      },
    };
  }
}
