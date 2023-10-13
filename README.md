# MoghimHotel
### [Moghim Hotel Document](https://apidoc.moghim24.services/doc/MoghimHotel)
## Install

```bash
$ npm install moghim-hotel-sdk
```

## How to use
## Login
```typescript
    import {Identity} from "moghim-hotel-sdk";
    const auth = new Identity("username", "password");
    let token = await auth.login();
    console.log(token);
```
## Check Token
```typescript
    const ping = await auth.ping(token);
    console.log(ping.issuccess);
```
## CustomerInformation
```typescript
    import {Hotel} from "moghim-hotel-sdk";
    const hotel = new Hotel();
    hotel.setToken(token);
    const customerInformation = await hotel.customerInformation();
    console.log(customerInformation.data.remainCredit);
```
## Info
```typescript
    hotel.setToken(token);
    const info = await hotel.info({
        cityiataCode: ["MHD"],
        country: ["Iran"],
        grade: [2, 4],
        agencyCode: ["100"],
    });
    console.log(info.data);
```

## Avail
```typescript
    hotel.setToken(token);
    const avail = await hotel.avail({
        moghimCode: ["SHAYAN", "DARVISHI"],
        country: ["Iran"],
        city: ["SHZ", "MHD"],
        roomCapacity: [2, 3],
        dateFormat: "shamsi",
        checkInDate: "1402/06/28",
        checkOutDate: "1402/06/30",
        extraService: [0, 1, 2],
        moreCaps: false,
    });
    console.log(avail.data);
```
## AvailCacheDatail
```typescript 
    hotel.setToken(token);
    const availCacheData = await hotel.availCacheData({
        cityCode: "MHD",
        startDate: "1402/06/28",
        endDate: "1402/06/30",
    });
    console.log(availCacheData.data);
```
## AvailCacheDataWithHotelCode
```typescript 
    
    hotel.setToken(token);
    const availCacheDataWithHotelCode = await hotel.availCacheDataWithHotelCode({
    startDate: "1402/06/19",
    endDate: "2023/09/16",
    cityCode: "KIH",
    hotelCode: "ARAMESH",
    });
    console.log(availCacheDataWithHotelCode.data);
```

## TemporaryReserve
```typescript 
    
    hotel.setToken("token");
    hotel.temporaryReserve({
        data: [
            {
            index: 1,
            roomId: "roomId",
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
    });

```

## FinalReserve
```typescript 
    
    hotel.setToken("token");
    hotel.finalReserve({
        data: [
            {
            mark: "axy.com شماره تماس 021-12345678",
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
    });


```