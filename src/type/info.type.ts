export type InfoResponse = {
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

type RoomData = {
  title: string;
  roomCode: number;
};
