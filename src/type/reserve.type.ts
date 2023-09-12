type HotelTemporaryReserveRoomType = {
  reserveId: string;
  roomId: string;
  uniqueRequestNumber: number;
  agencyCode: string;
  roomPrice: number;
  roomPriceCommission: number;
  netRoomPrice: number;
  servicePrice: number;
  servicePriceCommission: number;
  netServicePrice: number;
  lunchPrice: number;
  dinnerPrice: number;
  totalReserveRoomPrice: number;
};

type RoomsPriceType = {
  totalRoomsPrice: number;
  totalRoomsPriceCommission: number;
  totalNetRoomsPrice: number;
  totalServicesPrice: number;
  totalServicesPriceCommission: number;
  totalNetServicesPrice: number;
  totalLunchPrice: number;
  totalDinnerPrice: number;
  totalReservePrice: number;
};

export type TemporaryReserveResponse = {
  sessionId: string;
  rooms: HotelTemporaryReserveRoomType[];
  totalRoomsPrice: RoomsPriceType;
};

type HotelFinalReserveRoomType = HotelTemporaryReserveRoomType & {
  refer: string;
  voucherNumber: number;
};

export type FinalReserveResponse = {
  sessionId: string;
  rooms: HotelFinalReserveRoomType[];
  totalRoomsPrice: RoomsPriceType;
  initDate: string | Date;
};
