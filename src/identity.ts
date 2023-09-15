import axios, { AxiosResponse } from "axios";
import md5 from "md5";
import { LoginResponse, PingResponse } from "./type";

export class Identity {
  private service: "MoghimHotel";
  private client = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip,deflate",
    },
  });
  constructor(
    protected username?: string,
    protected password?: string,
  ) {}

  setUsername = (username: string) => {
    this.username = username;
  };
  setPassword = (password: string) => {
    this.password = password;
  };

  login = async () => {
    try {
      const response: AxiosResponse<LoginResponse> = await this.client.post(
        "https://identity.moghim24.services/api/Authentication/login",
        {
          service: this.service,
          username: this.username,
          md5password: md5(this.password),
        },
      );
      return response.data.data.token;
    } catch (error) {
      throw error;
    }
  };

  ping = async (token: string): Promise<PingResponse> => {
    try {
      const response: AxiosResponse<PingResponse> = await this.client.get(
        "https://identity.moghim24.services/api/ping",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };
}
