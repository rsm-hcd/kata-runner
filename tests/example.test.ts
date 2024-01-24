// import { beforeAll, describe, it } from "../deps.ts";
// // const globalSuite = describe("Testing Sandbox", () => {
// //   let testValue;
// //   beforeAll(() => {
// //     testValue = "YO YO YO";
// //     console.log("Testing Sandbox:Setup successful");
// //   });

// //   afterAll(() => {
// //     console.log("Testing Sandbox: Teardown successful");
// //   });
// // });

// // const kvStoreSuite = describe(globalSuite, "KV Store Setup", () => {
// //   beforeAll(() => {
// //     console.log("KV Store Setup: Setup successful");
// //   });

// //   afterAll(() => {
// //     console.log("KV Store Setup: Teardown successful");
// //   });
// // });

// interface GlobalContext {
//   testValue: string;
// }

// export const globalSuite = describe({
//   name: "Testing Sandbox",
//   beforeAll(this: GlobalContext) {
//     this.testValue = "YO YO YO";
//     // console.log("Testing Sandbox:Setup successful");
//   },
//   afterAll() {
//     // console.log("Testing SandboxTeardown successful");
//   },
// });

// interface KVStoreContext extends GlobalContext {
//   numberValue: number;
// }

// export const kvStoreSuite = describe({
//   name: "KV Store Setup",
//   beforeAll(this: KVStoreContext) {
//     // console.log("KV Store Setup: Setup successful");
//     // console.log(this.testValue);
//     this.numberValue = 123;
//   },
//   afterAll() {
//     // console.log("KV Store Setup: Teardown successful");
//   },
//   suite: globalSuite,
// });

// interface NoKataContext extends KVStoreContext {
//   kataValue: number;
// }
// const noKataSuite = describe(kvStoreSuite, "No Kata Setup", () => {
//   beforeAll(function (this: NoKataContext) {
//     this.kataValue = 456;
//     console.log("KV Store Setup: Setup successful");
//   });

//   it("TEST 4", function (this: KVStoreContext) {
//     console.log("successful", this.numberValue, this.testValue);
//   });

//   //   afterAll(() => {
//   //     console.log("KV Store Setup: Teardown successful");
//   //   });
// });

// it(globalSuite, "TEST 1", function (this: NoKataContext) {
//   console.log("successful", this.numberValue, this.testValue, this.kataValue);
// });

// it(kvStoreSuite, "TEST 2", function (this: KVStoreContext) {
//   console.log("successful", this.numberValue, this.testValue);
// });

// it(noKataSuite, "TEST 3", function (this: NoKataContext) {
//   console.log("successful", this.numberValue, this.testValue, this.kataValue);
// });
