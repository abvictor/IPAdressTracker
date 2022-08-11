import { useState, useContext } from "react";
import GoogleMapReact from "google-map-react";
import "../src/styles/global.css";
import { ToastContainer } from "react-toastify";
import styles from "../src/styles/app.module.css";
import MapView from "../src/components/Map/Map";
import Results from "../src/components/Result/Results";
import "react-toastify/dist/ReactToastify.min.css";
import background from "./assets/background.png";
import { HookUseContext } from "./hooks/useResultsContext";

function App() {
  return (
    <HookUseContext>
      <ToastContainer />
      <Results />
      <img src={background} className={styles.img} />
      <MapView />
    </HookUseContext>
  );
}

export default App;
