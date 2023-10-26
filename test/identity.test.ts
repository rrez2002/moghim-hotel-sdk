// import { Identity } from "../src/identity";

// describe("identity", () => {
//   test("login", () => {
//     const username = "username",
//       password = "password";
//     const service = new IdentityMock();

//     expect(service.username).toBe(username);
//     expect(service.password).toBe(password);
//     expect(service.login()).not.toBeNull();
//   });
// });

// class IdentityMock extends Identity {
//   username: string = "";
//   password: string = "";
//   constructor(username?: string, password?: string) {
//     super(username, password);
//   }
//   login = async (): Promise<string> => {
//     return "token";
//   };
// }
