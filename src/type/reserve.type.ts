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

type SelectableServices = {
  extraService: number;
  lunch: number;
  dinner: number;
};

type TemporaryReserveData = {
  index: number;
  roomId: string;
  requestedAvailData: null;
  passengerCount: number;
  uniqueRequestNumber: number;
  serviceData: SelectableServices;
};

export type TemporaryReserveDto = {
  dara: TemporaryReserveData;
  reserveIfChange: boolean;
};

type TransferType = {
  flightNumber: string;
  flightTime: string;
};

type Gender = "mr" | "mrs";
type Kind = "adl" | "chd" | "inf";
type Nationality = 0 | 1;

type PassengerType = {
  firstName: string;
  lastName: string;
  name: string;
  gender: Gender;
  kind: Kind;
  melliCode?: string;
  passport?: string;
  remark?: string;
  mobile?: string;
  email?: string;
  birthDate?: string;
  passportExpireDate?: string;
  nationality: Nationality;
  ordinal: number;
  bed: boolean;
};

type FinalReserveType = {
  reserveId: string;
  mark: string;
  transferToHotel?: TransferType;
  transferFromHotel?: TransferType;
  mobile: string;
  passengers: PassengerType[];
};

export type FinalReserveDto = {
  data: FinalReserveType[];
};
