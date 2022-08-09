import { useContext, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { GeolocateControl, Marker } from "react-map-gl";

import { useResultsContext } from "../hooks/useResultsContext";

const MapView = () => {
  const { userData } = useContext(useResultsContext);

  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVudG92eXNraSIsImEiOiJjbDZkd3h1bDgwMncyM3BvM29rbzJqdDRkIn0.hbVuMcnuFzy4Jy5DL3G5BQ"
        style={{ width: "100%", height: "697px" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        initialViewState={
          (userData.newData.location.coords.lat,
          userData.newData.location.coords.lng)
        }
      >
        <Marker
          latitude={userData.newData.location.coords.lat}
          longitude={userData.newData.location.coords.lng}
        />
      </Map>
    </div>
  );
};
export default MapView;

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCouFbFYpFZ_6ut3wd2fFxYN8W5LkLaMbY"
//   })
//   return isLoaded ? (
//       <GoogleMap
//         center={center}
//         zoom={10}

//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//   ) : <></>
// }

// export default React.memo(MyComponent)
