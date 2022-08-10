import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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
    fetch(`http://ipwho.is/${searchIp}`)
      .then((res) => res.json())
      .then((data) => {
        const result = {
          ip: data.ip,
          location: {
            region: data.region_code,
            city: data.city,
            coords: {
              lat: data.latitude,
              lng: data.longitude,
            },
          },
          timezone: data.timezone.utc,
          isp: data.connection.isp,
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
