mapboxgl.accessToken = 'pk.eyJ1Ijoia29ieXJ0aHIiLCJhIjoiY2wyb3praW1hMmZ4MTNlc2JvOTZlNmhkZSJ9.TYAumOYpo4s7GkldMOGLYQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-77.034084, 38.909671],
  zoom: 13,
  scrollZoom: false
});

const stores = {
    "type": "FeatureCollection",
    "features": [ ]
  };
  class StoreCoordinates {
    constructor(
        lng,lat,
        phoneFormatted,
        phone,
        address,
        city,
        state,
        crossStreet,
        postalCode,
        country
        )
        {
        this.type = "Feature",
        this.geometry = {
            "type": "Point",
            "coordinates":[lng,lat]
        },
        this.properties = {
            "phoneFormatted": phoneFormatted,
            "phone": phone,
            "address": address,
            "city": city,
            "country": country,
            "crossStreet": crossStreet,
            "postalCode": postalCode,
            "state": state,

        }
    }

   }

const storeDB = [
    {
        "lng": -77.049766,
        "lat": 38.900772,
        "phoneFormatted": "(202) 507-8357",
        "phone": "2025078357",
        "address": "2221 I St NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 22nd St NW",
        "postalCode": "20037",
        "state": "D.C."
    },
    {
        "lng":-77.043929,
        "lat":38.910525,
        "phoneFormatted": "(202) 387-9338",
        "phone": "2023879338",
        "address": "1512 Connecticut Ave NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at Dupont Circle",
        "postalCode": "20036",
        "state": "D.C."
    },
    {
        "lng":-77.06723,
        "lat":.90516896,
        "phoneFormatted": "(202) 337-9338",
        "phone": "2023379338",
        "address": "3333 M St NW",
        "city": "Washington DC",
        "country": "United States",
        "crossStreet": "at 34th St NW",
        "postalCode": "20007",
        "state": "D.C."
    }
]

let newStores = storeDB.map(item => new StoreCoordinates(
        item.lng,
        item.lat,
        item.phoneFormatted,
        item.phone,
        item.address,
        item.city,
        item.state,
        item.crossStreet,
        item.postalCode,
        item.country
))

for (var i of newStores) {
    stores.features.push(i)
}
// stores.features.push(newStores)

stores.features.forEach(function (store, i) {
    store.properties.id = i;
  });

map.on('load', () => {
  /* Add the data to your map as a layer */
  map.addLayer({
    id: 'locations',
    type: 'circle',
    /* Add a GeoJSON source containing place coordinates and information. */
    source: {
      type: 'geojson',
      data: stores
    }
  });
  //Call the build locations list function
  buildLocationList(stores);
});

map.on('click', (event) => {
    /* Determine if a feature in the "locations" layer exists at that point. */
    const features = map.queryRenderedFeatures(event.point, {
      layers: ['locations']
    });
  
    /* If it does not exist, return */
    if (!features.length) return;
  
    const clickedPoint = features[0];
  
    /* Fly to the point */
    flyToStore(clickedPoint);
  
    /* Close all other popups and display popup for clicked store */
    createPopUp(clickedPoint);
  
    /* Highlight listing in sidebar (and remove highlight for all other listings) */
    const activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    const listing = document.getElementById(
      `listing-${clickedPoint.properties.id}`
    );
    listing.classList.add('active');
  });
function buildLocationList(stores) {
    for (const store of stores.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = 'item';
  
      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = 'title';
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.address}`;
  
      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${store.properties.city}`;
      if (store.properties.phone) {
        details.innerHTML += ` · ${store.properties.phoneFormatted}`;
      }
      if (store.properties.distance) {
        const roundedDistance = Math.round(store.properties.distance * 100) / 100;
        details.innerHTML += `<div><strong>${roundedDistance} miles away</strong></div>`;
      }
    }
  }

function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

function createPopUp(currentFeature) {
  const popUps = document.getElementsByClassName('mapboxgl-popup');
  /** Check if there is already a popup on the map and if so, remove it */
  if (popUps[0]) popUps[0].remove();

  const popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(`<h3>Sweetgreen</h3><h4>${currentFeature.properties.address}</h4>`)
    .addTo(map);
}





/************************************************************************************************************************/






// const newStore = new StoreCoordinates(
//     -77.021080,
//     38.914720,
//     "(202) 234-7336",
//     "2022347336",
//     "My test Store",
//     "Washington DC",
//     "United States",
//     "at 15th St NW",
//     "20005",
//     "D.C."
//     )
// console.log(newStore)
// stores.features.push(newStore)

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

link.addEventListener('click', function () {
    for (const feature of stores.features) {
      if (this.id === `link-${feature.properties.id}`) {
        flyToStore(feature);
        createPopUp(feature);
      }
    }
    const activeItem = document.getElementsByClassName('active');
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }
    this.parentNode.classList.add('active');
  });


