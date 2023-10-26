import { Identity } from "../src/identity";
import { PingResponse } from "../src/type";

class IdentityMock extends Identity {
  username?: string;
  password?: string;
  constructor(username?: string, password?: string) {
    super(username, password);
    this.username = username;
    this.password = password;
  }
  login = async (): Promise<string> => {
    return "token";
  };
  ping = async (token: string): Promise<PingResponse> => {
    return {
      requestid: "string",
      total: 0,
      issuccess: true,
      data: {
        ping: "Ok",
        areaName: "string",
        who: "string",
        ip: "string",
        serviceName: "string",
        url: "string",
        securityMessage: "string",
      },
      errors: null,
    };
  };
}

describe("identity", () => {
  const service = new IdentityMock();

  test("set username and password in setter", () => {
    let username = "username";

    let password = "password";

    service.setUsername(username);
    service.setPassword(password);

    expect(service.username).toBe(username);
    expect(service.password).toBe(password);
  });

  test("set username and password in constructor", () => {
    let username = "username";

    let password = "password";
    const service = new IdentityMock(username, password);

    expect(service.username).toBe(username);
    expect(service.password).toBe(password);
  });

  test("login", async () => {
    let username = "username";

    let password = "password";
    const service = new IdentityMock(username, password);

    expect(service.login()).not.toBeNull();
    expect(await service.login()).toBe("token");
  });

  test("ping", async () => {
    let username = "username";

    let password = "password";
    const service = new IdentityMock(username, password);

    expect(service.ping("token")).not.toBeNull();
    expect((await service.ping("token")).data.ping).toBe("Ok");
  });
});
