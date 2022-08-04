import {CaretRight} from 'phosphor-react'
import { useEffect, useState, useContext, useMemo } from 'react'

import {useResultsContext} from '../hooks/useResultsContext'

const Results = () => {
  const {newLocation} = useContext(useResultsContext)
  const [searchIp, setSearchIp] = useState("")
  const [results, setResults] = useState({})
  


  useEffect(()=>{
    handleInputSubmit();
    
  },[])

     function handleInputSubmit(e){
      
      const endpoint = fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_49QW5sEjQozqlbjmd9A44KxQ5Wqmr&ipAddress=${searchIp}`)
      .then((res)=>res.json())
      .then( ( data ) => {
        const searchResults={
          address: data.ip,
          location_city: data.location.city,
          location_region: data.location.region,
          coords: {
            lat: data.location.lat,
            lng: data.location.lng
          },
          timeStamp: data.location.timezone,
          isp: data.isp,

        }
        setResults(searchResults)
        setSearchIp("")
        
      
      })
    }
  
  
  return (
    <>
    <div className='flex justify-center absolute mt-24 z-10'>
    <input 
    placeholder='Search for any IP address or domain'
    type="text" 
    className='w-[450px] h-12 rounded-l-xl p-4'
    value={searchIp}
    onChange={(e)=>setSearchIp(e.target.value)}
    />
    <button onClick={handleInputSubmit} className='bg-black text-white w-10 rounded-r-xl font-bold text-[18px] hover:bg-gray-700 hover:text-black'><CaretRight size={24} className="ml-2"/></button>
   </div>
    <div className='flex justify-center mt-44 absolute z-10'>
    <div className=' w-[850px] h-[120px] rounded-md shadow-md bg-white '>
      <div className='flex justify-around mt-4 '>
        <div className='flex flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>IP ADDRESS</span>
        <p className='mt-2 font-medium text-gray-900'>{results.address}</p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>LOCATION</span>
        <p className='mt-2 text-gray-900 font-medium'>{results.location_city}, {results.location_region}</p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>TIMESTAMP</span>
        <p className='mt-2 text-gray-900 font-medium'>UTC{results.timeStamp}</p>
        </div>
        <div className='flex  flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>ISP</span>
        <p className='mt-2 text-gray-900 font-medium'>{results.isp}</p>
        </div>
        
        </div>
    </div>
    </div>
    </>
  )
}

export default Results