import { createContext, useState, useEffect,  } from "react";

export const useResultsContext = createContext();

export const HookUseContext = ({ children }) => {
  const [searchIp, setSearchIp] = useState("");
  const [resultsContext, setResultsContext] = useState({});
  

  const newLocation = resultsContext.coords
  console.log(newLocation, 'hook')
  useEffect(()=>{
    handleFetch();

    //view newResult state
    //mudar o ip, mudar o marcador
  },[])
  
  function handleFetch(){
    const endpoint = fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_DVcSEUfBtszuFO7SKTFgUIqDTS9VA&ipAddress=${searchIp}`
    )
      .then((res) => res.json())
      .then((data) => {
        const searchResults = {
          address: data.ip,
          location_city: data.location.city,
          location_region: data.location.region,
          coords: {
            lat: data.location.lat,
            lng: data.location.lng
          },
          timeStamp: data.location.timezone,
          isp: data.isp,
        };
        setResultsContext(searchResults);
        setSearchIp("")      
        
      });
  }

  return (
    <useResultsContext.Provider value={{newLocation}}>
      {children}
    </useResultsContext.Provider>
  );
};
