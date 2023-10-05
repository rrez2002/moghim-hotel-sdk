type CitiesType = {
  locations: CitiesData[];
};

type CitiesData = {
  country: string;
  totalHotelCount: number;
  totalNightNumber: number;
  totalCityCount: number;
  minimumDate: string;
  maximumDate: string;
};

export type CitiesResponse = {
  requestid: string;
  issuccess: boolean;
  data: CitiesType;
  errors: [];
};

type CityType = {
  cityCode: string;
  country: string;
  cityFaName: string;
  cityEnName: string;
  icao: string;
  isDomestic: boolean;
};

export type GetAllCitiesResponse = {
  requestid: string;
  issuccess: boolean;
  data: CityType[];
  errors: [];
};
