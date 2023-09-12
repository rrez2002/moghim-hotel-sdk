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
