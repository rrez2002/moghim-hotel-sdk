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
  const availCacheDataWithHotelCode = await hotel.availCacheDataWithHotelCode(
    {
      startDate: "1402/06/19",
      endDate: "2023/09/16",
      cityCode: "KIH",
      hotelCode: "ARAMESH",
    });
    console.log(availCacheDataWithHotelCode.data);
```