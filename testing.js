class StoreCoordinates {
    constructor(
        lng,lat,
        // phoneFormatted,
        // phone,
        // address,
        // city,
        // state,
        // crossStreet,
        // postalCode,
        // country,
        storeName
        )
        {
        this.type = "Feature",
        this.geometry = {
            "type": "Point",
            "coordinates":[lng,lat]
        },
        this.properties = {
            // "phoneFormatted": phoneFormatted,
            // "phone": phone,
            // "address": address,
            // "city": city,
            // "country": country,
            // "crossStreet": crossStreet,
            // "postalCode": postalCode,
            // "state": state,
            "storeName": storeName

        }
    }

   }


const newStore = new StoreCoordinates(-77.021080,38.914720,"testStore")
console.log(newStore)

// class StoreProperties {
//    constructor(phone,address,city,state,postalCode,country){
//        this.phone = phone,
//        this.address = address,
//        this.city = city,
//        this.state = state,
//        this.postalCode = postalCode,
//        this.phone = phone
       
//    }

// }


// class FullStoreObject {
//     constructor(StoreCoordinates, StoreProperties){

//     }

// }