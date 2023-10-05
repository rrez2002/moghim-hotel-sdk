type AgenciesHotelsInfo = {
  agencyCode: string;
  moghimCode: string;
  agencyName: string;
  hotelName: string;
  hotelLocation: string;
};

export type AgenciesHotelsInfoResponse = {
  requestid: string;
  issuccess: boolean;
  data: AgenciesHotelsInfo[];
  errors: [];
};

export type GetAllHotels = {
  moghimCode: string;
  hotelFaName: string;
  hotelEnName: string;
  country: string;
  cityName: string;
  cityCode: string;
  grade: number;
  kindFaName: string;
  address: string;
  roomsInfo: RoomInfoType[];
};

export type RoomInfoType = {
  roomCode: number;
  roomName: string;
};

export type GetAllHotelsResponse = {
  requestid: string;
  issuccess: boolean;
  data: GetAllHotels[];
  errors: [];
};
