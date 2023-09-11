type LocationInfoType = {
  address: string;
  cityIataCode: string;
  cityEnName: string;
  cityFaName: string;
  country: string;
};

type HotelRoomInfoType = {
  roomId: string;
  roomIndex: number;
  roomCode: number;
  roomName: string;
  roomCapacity: number;
  minimumRoomCount: number;
  serviceCapacity: number;
  pricesInfo: HotelRoomPricesInfoType;
  serviceInfo: HotelServiceInfoType;
};

type HotelRoomPricesInfoType = {
  details: HotelRoomPricesDetailsInfoType[];
};

type HotelRoomPricesDetailsInfoType = {
  date: string | Date;
  roomPrice: number;
  roomPricePercentCommission: number;
  netRoomPrice: number;
  servicePrice: number;
  servicePricePercentCommission: number;
  netServicePrice: number;
  lunchPrice: number;
  dinnerPrice: number;
  originalPrice: number | null;
  originalCommission: number | null;
  markupPercent: number | null;
  markupValue: number | null;
  commissionPercent: number | null;
  commissionValue: number | null;
};

type HotelServiceInfoType = {
  transferToHotel: boolean;
  transferFromHotel: boolean;
  breakFast: boolean;
  lunch: boolean;
  dinner: boolean;
  other: string;
  selectableLunch: boolean;
  selectableDinner: boolean;
};

export type AvailType = {
  checkInDate: string | Date;
  checkOutDate: string | Date;
  agencyCode: string;
  agencyName: string;
  moghimCode: string;
  kindName: string;
  hotelName: string;
  grade: number;
  locationInfo: LocationInfoType;
  rooms: HotelRoomInfoType[];
};

export type AvailResponse = {
  requestid: string;
  total: number;
  issuccess: boolean;
  data: AvailType[];
  errors: [];
};
