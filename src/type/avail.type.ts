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

export type AvailCacheDataType = {
  agencyCode: string;
  agencyName: string;
  moghimCode: string;
  kindName: string;
  hotelName: string;
  grade: number;
  locationInfo: LocationInfoType;
  rooms: HotelRoomItemType[];
};

type HotelRoomItemType = {
  roomIndex: number;
  roomCode: number;
  roomName: string;
  roomCapacity: number;
  serviceCapacity: number;
  details: RoomDetailInfotype;
  serviceInfo: HotelServiceInfoType;
};

type RoomDetailInfotype = {
  details: RoomDetailType[];
};

type RoomDetailType = {
  date: string | Date;
  blockIn: boolean;
  blockOut: boolean;
  minDays: number;
  maxDays: number;
  lunchPrice: number;
  dinnerPrice: number;
  roomCount: number;
  roomPrice: number;
  netRoomPrice: number;
  roomPricePercentCommission: number;
  servicePrice: number;
  servicePricePercentCommission: number;
};

export type AvailCacheDataResponse = {
  requestid: string;
  issuccess: boolean;
  data: AvailCacheDataType[];
  errors: [];
};

type DateFormat = "shamsi" | "miladi";

export type AvailDto = {
  agencyCode?: string[];
  moghimCode?: string[];
  country?: string[];
  city?: string[];
  roomCapacity?: number[];
  dateFormat: DateFormat;
  checkInDate: string;
  checkOutDate: string;
  extraService?: number[];
  moreCaps?: boolean;
};

export type AvailCacheDataDto = {
  startDate: string;
  endDate: string;
  cityCode?: string;
  hotelCode?: string;
  agencyCode?: string;
};
