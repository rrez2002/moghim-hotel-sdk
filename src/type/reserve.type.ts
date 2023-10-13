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
  passengerCount: number;
  uniqueRequestNumber: number;
  serviceData: SelectableServices;
};

export type TemporaryReserveDto = {
  data: TemporaryReserveData[];
  reserveIfChange: boolean;
};

type TransferType = {
  flightNumber: string;
  flightTime: string;
};

/**
 * male mr and female mrs
 */
type Gender = "mr" | "mrs";

export enum GenderEnum {
  male = "mr",
  female = "mrs",
}

/**
 * adult adl
 * child chd
 * infant inf
 */
type Kind = "adl" | "chd" | "inf";

export enum KingEmum {
  adult = "adl",
  child = "chd",
  infant = "inf",
}

/**
 * Iranian passengers 0 and for foreign passengers 1
 */
type Nationality = 0 | 1;

export enum NationalityEnum {
  iranianPassenger,
  foreignPassenger,
}

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
