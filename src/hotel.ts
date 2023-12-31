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
  GetAllHotelsResponse,
  InfoDto,
  InfoResponse,
  TemporaryReserveDto,
  TemporaryReserveResponse,
  hotelImageDto,
  hotelImageResponse,
  CitiesResponse,
  GetAllCitiesResponse,
} from "./type";

export class Hotel {
  private token: string;
  private client: AxiosInstance = axios.create({
    baseURL: "https://hotel.moghim24.services",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Accept-Encoding": "gzip,deflate",
    },
  });
  constructor() {}

  setToken(token: string) {
    this.token = token;
  }

  info = async (data: InfoDto): Promise<InfoResponse> => {
    try {
      const response: AxiosResponse<InfoResponse> = await this.client.post(
        "api/3.0/Hotel/Info",
        data,
        {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  avail = async (data: AvailDto): Promise<AvailResponse> => {
    try {
      const response: AxiosResponse<AvailResponse> = await this.client.post(
        "api/3.0/Hotel/Avail",
        data,
        {
          headers: {
            Authorization: `bearer ${this.token}`,
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
    data: AvailCacheDataDto,
  ): Promise<AvailCacheDataResponse> => {
    try {
      const response: AxiosResponse<AvailCacheDataResponse> =
        await this.client.post("api/3.0/Hotel/AvailCacheData", data, {
          headers: {
            Authorization: `bearer ${this.token}`,
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
    data: AvailCacheDataWithHotelCodeDto,
  ): Promise<AvailCacheDataResponse> => {
    try {
      const response: AxiosResponse<AvailCacheDataResponse> =
        await this.client.post(
          "api/3.0/Hotel/AvailCacheDataWithHotelCode",
          data,
          {
            headers: {
              Authorization: `bearer ${this.token}`,
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

  cities = async (): Promise<CitiesResponse> => {
    try {
      const response: AxiosResponse<CitiesResponse> = await this.client.get(
        "api/3.0/Hotel/Cities",
        {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  getAllCities = async (): Promise<GetAllCitiesResponse> => {
    try {
      const response: AxiosResponse<GetAllCitiesResponse> =
        await this.client.get("api/3.0/Hotel/GetAllCities", {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  customerInformation = async (): Promise<CustomerInformationResponse> => {
    try {
      const response: AxiosResponse<CustomerInformationResponse> =
        await this.client.get("api/3.0/Hotel/CustomerInformation", {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  hotelImages = async (data: hotelImageDto): Promise<hotelImageResponse> => {
    try {
      const response: AxiosResponse<hotelImageResponse> =
        await this.client.post("api/3.0/Hotel/HotelImages", data, {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  getAllHotels = async (): Promise<GetAllHotelsResponse> => {
    try {
      const response: AxiosResponse<GetAllHotelsResponse> =
        await this.client.get("api/3.0/Hotel/GetAllHotels", {
          headers: {
            Authorization: `bearer ${this.token}`,
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

  agenciesHotelsInfo = async (): Promise<AgenciesHotelsInfoResponse> => {
    try {
      const response: AxiosResponse<AgenciesHotelsInfoResponse> =
        await this.client.get("api/3.0/Hotel/AgenciesHotelsInfo", {
          headers: {
            Authorization: `bearer ${this.token}`,
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
    data: TemporaryReserveDto,
  ): Promise<TemporaryReserveResponse> => {
    try {
      const response: AxiosResponse<TemporaryReserveResponse> =
        await this.client.post("api/3.0/Hotel/TemporaryReserve", data, {
          headers: {
            Authorization: `bearer ${this.token}`,
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
    data: FinalReserveDto,
  ): Promise<FinalReserveResponse> => {
    try {
      const response: AxiosResponse<FinalReserveResponse> =
        await this.client.post("api/3.0/Hotel/FinalReserve", data, {
          headers: {
            Authorization: `bearer ${this.token}`,
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
