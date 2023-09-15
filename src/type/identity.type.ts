export type LoginResponse = {
  issuccess: boolean;
  data: { token: string };
};

export type PingResponse = {
  requestid: string;
  total: number;
  issuccess: boolean;
  data: {
    ping: "Ok";
    areaName: string;
    who: string;
    ip: string;
    serviceName: string;
    url: string;
    securityMessage: string;
  };
  errors: null | object[];
};
