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
