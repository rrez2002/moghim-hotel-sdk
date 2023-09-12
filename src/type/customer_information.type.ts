type CustomerInformation = {
  remainCredit: number;
};

export type CustomerInformationResponse = {
  requestid: string;
  issuccess: boolean;
  data: CustomerInformation;
  errors: [];
};
