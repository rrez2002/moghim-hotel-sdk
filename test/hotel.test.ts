// import { Hotel } from "../src/hotel";
// import { GenderEnum, KingEmum, NationalityEnum } from "../src/type";

// describe("hotel", () => {
//   test("cities", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.cities();
//   });

//   test("getAllCities", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.getAllCities();
//   });

//   test("getAllHotels", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.getAllHotels();
//   });

//   test("hotelImages", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.hotelImages({
//       hotelCodes: ["LILIUMKIH"],
//     });
//   });

//   test("agenciesHotelsInfo", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.agenciesHotelsInfo();
//   });

//   test("temporaryReserve", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.temporaryReserve({
//       data: [
//         {
//           index: 1,
//           roomId: "071341a2-858a-4ede-bacb-0637c41b226e",
//           passengerCount: 2,
//           uniqueRequestNumber: 1,
//           serviceData: {
//             extraService: 1,
//             lunch: 2,
//             dinner: 2,
//           },
//         },
//       ],
//       reserveIfChange: true,
//     });
//   });

//   test("finalReserve", () => {
//     const hotel = new Hotel();

//     hotel.setToken("token");
//     hotel.finalReserve({
//       data: [
//         {
//           mark: "موتور فروش axy.com شماره تماس 021-12345678",
//           mobile: "09121234567",
//           reserveId: "c9b13b51-2a3c-4499-ba57-3569c1ae4a42",
//           transferFromHotel: {
//             flightNumber: "451",
//             flightTime: "19:11",
//           },
//           transferToHotel: {
//             flightNumber: "452",
//             flightTime: "15:45",
//           },
//           passengers: [
//             {
//               firstName: "Ali",
//               lastName: "Karimi",
//               name: "Karimi/Ali",
//               bed: true,
//               nationality: NationalityEnum.iranianPassenger,
//               passportExpireDate: "2019/05/12",
//               birthDate: "1375/05/12",
//               mobile: "09129876543",
//               email: "email@mail.com",
//               melliCode: "valid melli code",
//               passport: "valid passport",
//               remark: "passenger remark",
//               kind: KingEmum.adult,
//               gender: GenderEnum.male,
//             },
//             {
//               firstName: "Reza",
//               lastName: "Karimi",
//               name: "Karimi/Reza",
//               gender: GenderEnum.male,
//               kind: KingEmum.adult,
//               melliCode: "valid melli code",
//               passport: "valid passport",
//               remark: "passenger remark",
//               mobile: "09129876542",
//               email: "email2@mail.com",
//               birthDate: "1378/04/23",
//               passportExpireDate: "2019/05/12",
//               nationality: NationalityEnum.iranianPassenger,
//               bed: true,
//             },
//           ],
//         },
//       ],
//     });
//   });
// });
