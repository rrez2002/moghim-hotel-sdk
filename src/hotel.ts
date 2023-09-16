import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import {
  AgenciesHotelsInfoResponse,
  AvailCacheDataDto,
  AvailCacheDataResponse,
  AvailCacheDataWithHotelCodeDto,
  AvailDto,
  AvailResponse,
  CustomerInformationResponse,
  FinalReserveDto,
  FinalReserveResponse,
  InfoDto,
  InfoResponse,
  TemporaryReserveDto,
  TemporaryReserveResponse,
  hotelImageDto,
  hotelImageResponse,
} from "./type";

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

  info = async (token: string, data: InfoDto): Promise<InfoResponse> => {
    try {
      const response: AxiosResponse<InfoResponse> = await this.client.post(
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

  avail = async (token: string, data: AvailDto): Promise<AvailResponse> => {
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

  availCacheData = async (
    token: string,
    data: AvailCacheDataDto,
  ): Promise<AvailCacheDataResponse> => {
    try {
      const response: AxiosResponse<AvailCacheDataResponse> =
        await this.client.post("api/3.0/Hotel/AvailCacheData", data, {
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

  availCacheDataWithHotelCode = async (
    token: string,
    data: AvailCacheDataWithHotelCodeDto,
  ): Promise<AvailCacheDataResponse> => {
    try {
      const response: AxiosResponse<AvailCacheDataResponse> =
        await this.client.post(
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

  customerInformation = async (
    token: string,
  ): Promise<CustomerInformationResponse> => {
    try {
      const response: AxiosResponse<CustomerInformationResponse> =
        await this.client.get("api/3.0/Hotel/CustomerInformation", {
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

  hotelImages = async (
    token: string,
    data: hotelImageDto,
  ): Promise<hotelImageResponse> => {
    try {
      const response: AxiosResponse<hotelImageResponse> =
        await this.client.post("api/3.0/Hotel/HotelImages", data, {
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

  agenciesHotelsInfo = async (
    token: string,
  ): Promise<AgenciesHotelsInfoResponse> => {
    try {
      const response: AxiosResponse<AgenciesHotelsInfoResponse> =
        await this.client.get("api/3.0/Hotel/AgenciesHotelsInfo", {
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

  temporaryReserve = async (
    token: string,
    data: TemporaryReserveDto,
  ): Promise<TemporaryReserveResponse> => {
    try {
      const response: AxiosResponse<TemporaryReserveResponse> =
        await this.client.post("api/3.0/Hotel/TemporaryReserve", data, {
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

  finalReserve = async (
    token: string,
    data: FinalReserveDto,
  ): Promise<FinalReserveResponse> => {
    try {
      const response: AxiosResponse<FinalReserveResponse> =
        await this.client.post("api/3.0/Hotel/FinalReserve", data, {
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
}
