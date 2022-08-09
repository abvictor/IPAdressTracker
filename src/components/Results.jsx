import { CaretRight } from "phosphor-react";
import { useEffect, useState, useContext, useMemo } from "react";

import { useResultsContext } from "../hooks/useResultsContext";

const Results = () => {
  const { userData } = useContext(useResultsContext);
  const [ip, setIp] = useState("");

  useEffect(() => {
    handleInputSubmit();
  }, []);

  function handleInputSubmit() {
    userData.ip.setIpSearch(ip);
    console.log(userData);
  }

  return (
    <>
      <div className="flex justify-center absolute mt-24 z-10">
        <input
          placeholder="Search for any IP address or domain"
          type="text"
          className="w-[450px] h-12 rounded-l-xl p-4"
          value={ip.searchIp}
          onChange={(e) => setIp(e.target.value)}
        />
        <button
          onClick={handleInputSubmit}
          className="bg-black text-white w-10 rounded-r-xl font-bold text-[18px] hover:bg-gray-700 hover:text-black"
        >
          <CaretRight size={24} className="ml-2" />
        </button>
      </div>
      <div className="flex justify-center mt-44 absolute z-10">
        <div className=" w-[850px] h-[120px] rounded-md shadow-md bg-white ">
          <div className="flex justify-around mt-4 ">
            <div className="flex flex-col">
              <span className="text-gray-500 mt-4 font-medium text-sm leading-relaxed">
                IP ADDRESS
              </span>
              <p className="mt-2 font-medium text-gray-900">
                {userData.newData.ip}
              </p>
            </div>
            <div className="flex flex-col ">
              <span className="text-gray-500 mt-4 font-medium text-sm leading-relaxed">
                LOCATION
              </span>
              <p className="mt-2 text-gray-900 font-medium">
                {userData.newData.location.city},{" "}
                {userData.newData.location.region}
              </p>
            </div>
            <div className="flex flex-col ">
              <span className="text-gray-500 mt-4 font-medium text-sm leading-relaxed">
                TIMESTAMP
              </span>
              <p className="mt-2 text-gray-900 font-medium">
                {userData.newData.timezone}
              </p>
            </div>
            <div className="flex  flex-col">
              <span className="text-gray-500 mt-4 font-medium text-sm leading-relaxed">
                ISP
              </span>
              <p className="mt-2 text-gray-900 font-medium">
                {userData.newData.isp}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
