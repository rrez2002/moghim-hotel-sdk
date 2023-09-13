type InfoType = {
  city: string;
  hotelFaName: string;
  moghimCode: string;
  grade: number;
  address: string;
  floorNo: number;
  roomNo: number;
  remark: string;
  ageChdWithoutBedFree: string;
  ageChdWithoutBedHalfPrice: string;
  country: string;
  kindFaName: string;
  lat: number;
  lng: number;
  rooms: RoomData[];
};

export type InfoResponse = {
  requestid: string;
  issuccess: boolean;
  data: InfoType[];
  errors: [];
};

type RoomData = {
  title: string;
  roomCode: number;
};

export type InfoDto = {
  moghimCode?: string[];
  cityiataCode?: string[];
  country?: string[];
  grade?: string[];
  agencyCode?: string[];
};
