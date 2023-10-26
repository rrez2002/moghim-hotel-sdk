import {
  AvailCacheDataDto,
  AvailCacheDataWithHotelCodeDto,
  AvailDto,
  FinalReserveDto,
  GenderEnum,
  InfoDto,
  KingEmum,
  NationalityEnum,
  TemporaryReserveDto,
  hotelImageDto,
} from "../src/type";

class MockHohel {
  token: string;

  setToken = (token: string) => {
    this.token = token;
  };
  info = (data: InfoDto) => {
    return data;
  };
  avail = (data: AvailDto) => {
    return data;
  };
  availCacheData = (data: AvailCacheDataDto) => {
    return data;
  };
  availCacheDataWithHotelCode = (data: AvailCacheDataWithHotelCodeDto) => {
    return data;
  };
  cities = () => {
    return true;
  };
  getAllCities = () => {
    return true;
  };
  customerInformation = () => {
    return true;
  };
  hotelImages = (data: hotelImageDto) => {
    return data;
  };
  getAllHotels = () => {
    return true;
  };
  agenciesHotelsInfo = () => {
    return true;
  };
  temporaryReserve = (data: TemporaryReserveDto) => {
    return data;
  };
  finalReserve = (data: FinalReserveDto) => {
    return data;
  };
}

describe("hotel", () => {
  const hotel: MockHohel = new MockHohel();

  test("cities", () => {
    hotel.setToken("token");
    expect(hotel.cities()).toBe(true);
  });

  test("getAllCities", () => {
    hotel.setToken("token");
    expect(hotel.getAllCities()).toBe(true);
  });

  test("getAllHotels", () => {
    hotel.setToken("token");
    expect(hotel.getAllHotels()).toBe(true);
  });

  test("hotelImages", () => {
    hotel.setToken("token");
    const data = {
      hotelCodes: ["LILIUMKIH"],
    };
    expect(hotel.hotelImages(data)).toBe(data);
  });

  test("agenciesHotelsInfo", () => {
    hotel.setToken("token");
    expect(hotel.agenciesHotelsInfo()).toBe(true);
  });

  test("temporaryReserve", () => {
    hotel.setToken("token");
    const data = {
      data: [
        {
          index: 1,
          roomId: "071341a2-858a-4ede-bacb-0637c41b226e",
          passengerCount: 2,
          uniqueRequestNumber: 1,
          serviceData: {
            extraService: 1,
            lunch: 2,
            dinner: 2,
          },
        },
      ],
      reserveIfChange: true,
    };
    expect(hotel.temporaryReserve(data)).toBe(data);
  });

  test("finalReserve", () => {
    let data = {
      data: [
        {
          mark: "موتور فروش axy.com شماره تماس 021-12345678",
          mobile: "09121234567",
          reserveId: "c9b13b51-2a3c-4499-ba57-3569c1ae4a42",
          transferFromHotel: {
            flightNumber: "451",
            flightTime: "19:11",
          },
          transferToHotel: {
            flightNumber: "452",
            flightTime: "15:45",
          },
          passengers: [
            {
              firstName: "Ali",
              lastName: "Karimi",
              name: "Karimi/Ali",
              bed: true,
              nationality: NationalityEnum.iranianPassenger,
              passportExpireDate: "2019/05/12",
              birthDate: "1375/05/12",
              mobile: "09129876543",
              email: "email@mail.com",
              melliCode: "valid melli code",
              passport: "valid passport",
              remark: "passenger remark",
              kind: KingEmum.adult,
              gender: GenderEnum.male,
            },
            {
              firstName: "Reza",
              lastName: "Karimi",
              name: "Karimi/Reza",
              gender: GenderEnum.male,
              kind: KingEmum.adult,
              melliCode: "valid melli code",
              passport: "valid passport",
              remark: "passenger remark",
              mobile: "09129876542",
              email: "email2@mail.com",
              birthDate: "1378/04/23",
              passportExpireDate: "2019/05/12",
              nationality: NationalityEnum.iranianPassenger,
              bed: true,
            },
          ],
        },
      ],
    };

    hotel.setToken("token");
    expect(hotel.finalReserve(data)).toBe(data);
  });
});
