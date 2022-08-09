import { createContext, useState, useEffect } from "react";

export const useResultsContext = createContext();

export const HookUseContext = ({ children }) => {
  const [searchIp, setIpSearch] = useState("");
  const [newData, setNewData] = useState({
    ip: "",
    location: {
      region: "",
      city: "",
      coords: {
        lat: "",
        lng: "",
      },
    },
    timezone: "",
    isp: "",
  });

  const userData = { newData, ip: { searchIp, setIpSearch: setIpSearch } };

  useEffect(() => {
    console.log("oie");
    fetch(`http://ip-api.com/json/${searchIp}`)
      .then((res) => res.json())
      .then((data) => {
        const result = {
          ip: data.query,
          location: {
            region: data.region,
            city: data.regionName,
            coords: {
              lat: data.lat,
              lng: data.lon,
            },
          },
          timezone: data.timezone,
          isp: data.isp,
        };
        setNewData(result);
      });
  }, [searchIp]);

  return (
    <useResultsContext.Provider value={{ userData }}>
      {children}
    </useResultsContext.Provider>
  );
};
