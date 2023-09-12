import axios, { AxiosResponse } from "axios";
import md5 from "md5";
import { LoginResponse } from "./type";

export class Identity {
  private static service: "MoghimHotel";
  private static client = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip,deflate",
    },
  });
  constructor() {}

  static login = async (username: string, password: string) => {
    try {
      const response: AxiosResponse<LoginResponse> = await this.client.post(
        "https://identity.moghim24.services/api/Authentication/login",
        {
          service: this.service,
          username,
          md5password: md5(password),
        },
      );
      return response.data.data.token;
    } catch (error) {
      throw error;
    }
  };

  static ping = async (token: string) => {
    try {
      const response = await this.client.get(
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
