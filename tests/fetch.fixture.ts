import { MockFetch } from "../deps.ts";

export class FetchFixture {
  private constructor() {}

  static replaceFetch(): void {
    MockFetch.install();
  }

  static mockGetRequest(url: string, response: any): void {
    // const responseString = JSON.stringify(response);
    MockFetch.mock(`GET@${url}`, (_req, params) => {
      return new Response(response, {
        status: 200,
      });
    });
  }

  static cleanUp(): void {
    MockFetch.uninstall();
  }
}
