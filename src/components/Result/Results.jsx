import { CaretRight } from "phosphor-react";
import { useEffect, useState, useContext } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import styles from "./results.module.css";
import { useResultsContext } from "../../hooks/useResultsContext";

const Results = () => {
  const { userData } = useContext(useResultsContext);
  const [ip, setIp] = useState("");

  useEffect(() => {
    handleInputSubmit();
  }, []);

  function handleInputSubmit() {
    userData.ip.setIpSearch(ip);
    // tip();
  }

  // // function tip() {
  // //   toast.info("Remember, the field must be a valid IP address or domain.");
  // // }
  return (
   
    <div>
      <header className={styles.header}>
        <title>IP Address Tracker</title>
        <input
          type="text"
          value={ip.searchIp}
          onChange={(e) => setIp(e.target.value)}
          className={styles.input}
          placeholder="Search for any address or domain"
        />
        <button onClick={handleInputSubmit} className={styles.button}>
          <CaretRight />
        </button>
      </header>
      <div className={styles.results_center}>
        <article className={styles.results_container}>
          <div className={styles.items_row}>
            <div className={styles.items}>
              <span>IP ADDRESS</span>
              <p>{userData.newData.ip}</p>
            </div>
            <div className={styles.items}>
              <span>LOCATION</span>
              <p>
                {userData.newData.city},{" "}
                {userData.newData.region}
              </p>
            </div>
            <div className={styles.items}>
              <span>TIMEZONE</span>
              <p>{userData.newData.utc}</p>
            </div>
            <div className={styles.items}>
              <span>ISP</span>
              <p>{userData.newData.isp}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  
  );
};

export default Results;