import { useContext, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import styles from "../Map/map.module.css";
import { useResultsContext } from "../../hooks/useResultsContext";

const MapView = () => {
  const { userData } = useContext(useResultsContext);

  return (
    <div className={styles.map_container}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYmVudG92eXNraSIsImEiOiJja3Fmcm1kZjgxeDlnMzBtbzByMDNodjhzIn0.o_rfX3ostxTHJoN97jO-2g"
        mapStyle="mapbox://styles/mapbox/streets-v11"
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
