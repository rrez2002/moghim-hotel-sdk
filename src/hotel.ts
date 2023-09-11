import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { AvailResponse } from "./type";

export class Hotel {
  private client: AxiosInstance = axios.create({
    baseURL: "https://hotel.moghim24.services",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip,deflate",
    },
  });
  constructor() {}

  info = async (token: string, data: object) => {
    try {
      const response: AxiosResponse = await this.client.post(
        "api/3.0/Hotel/Info",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  avail = async (token: string, data: object): Promise<AvailResponse> => {
    try {
      const response: AxiosResponse<AvailResponse> = await this.client.post(
        "api/3.0/Hotel/Avail",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  availCacheData = async (token: string, data: object) => {
    try {
      const response = await this.client.post(
        "api/3.0/Hotel/AvailCacheData",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  availCacheDataWithHotelCode = async (token: string, data: object) => {
    try {
      const response = await this.client.post(
        "api/3.0/Hotel/AvailCacheDataWithHotelCode",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  cities = async (token: string) => {
    try {
      const response = await this.client.get("api/3.0/Hotel/Cities", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  getAllCities = async (token: string) => {
    try {
      const response = await this.client.get("api/3.0/Hotel/GetAllCities", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  customerInformation = async (token: string) => {
    try {
      const response = await this.client.get(
        "api/3.0/Hotel/CustomerInformation",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  hotelImages = async (token: string, data: object) => {
    try {
      const response = await this.client.post(
        "api/3.0/Hotel/HotelImages",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  getAllHotels = async (token: string, data: object) => {
    try {
      const response = await this.client.get("api/3.0/Hotel/GetAllHotels", {
          headers: {
            Authorization: `bearer ${token}`,
          },
        });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  agenciesHotelsInfo = async (token: string) => {
    try {
      const response = await this.client.get(
        "api/3.0/Hotel/AgenciesHotelsInfo",
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  hemporaryReserve = async (token: string, data: object) => {
    try {
      const response = await this.client.post(
        "api/3.0/Hotel/TemporaryReserve",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };

  finalReserve = async (token: string, data: object) => {
    try {
      const response = await this.client.post(
        "api/3.0/Hotel/FinalReserve",
        data,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error.response.data;
      }
      throw error;
    }
  };
}
