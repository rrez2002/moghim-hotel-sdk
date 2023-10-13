type HotelImage = {
  hotelCode: string;
  images: Image[];
};

type Image = {
  imageUrl: string;
};

export type hotelImageResponse = {
  requestid: string;
  issuccess: boolean;
  data: HotelImage[];
  errors: [];
};

export type hotelImageDto = {
  hotelCodes?: string[];
};
