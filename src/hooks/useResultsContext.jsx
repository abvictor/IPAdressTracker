import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const useResultsContext = createContext();

export const HookUseContext = ({ children }) => {
  const [searchIp, setIpSearch] = useState("");
  const [newData, setNewData] = useState({
    ip: '',
    city: '',
    region: '',
    country: '',
    coords: {
      lat: '',
      lng: '',
    },
    timezone: '',
    isp: '',
    utc: ''
  });

  const userData = { newData, ip: { searchIp, setIpSearch: setIpSearch } };

  useEffect(() => {
    fetch(`https://ipapi.co/${searchIp}/json/`)
      .then((res) => res.json())
      .then((data) => {
        const result = {
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country,
          coords: {
            lat: data.latitude,
            lng: data.longitude,
          },
          timezone: data.timezone,
          isp: data.org,
          utc: data.utc_offset
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
