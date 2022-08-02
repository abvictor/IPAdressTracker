import React from 'react'
import { useEffect, useState } from 'react'

const Results = () => {
  const [ip, setIp] = useState("")
  const [firstRender, setFirstRender] = useState({})

  useEffect(()=>{
    const endpoint = fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_a8ZOyg1fzsa6qoTXtbXW7FVFLQbfR&ipAddress=${ip}`)
    .then((res)=>res.json())
    .then( ( data ) => {
      const firstRenderResult={
        address: data.ip,
        location_city: data.location.city,
        location_region: data.location.region,
        timeStamp: data.location.timezone,
        isp: data.isp 
      }
      setFirstRender(firstRenderResult)
    })
  },[])
 


  return (
    <>
    <div className='flex justify-center absolute mt-24 z-10'>
    <input 
    placeholder='Search for any IP address or domain'
    type="text" 
    className='w-[450px] h-12 rounded-l-xl p-4'
    />
    <button className='bg-black text-white w-10 rounded-r-xl font-bold text-[18px] hover:bg-gray-700 hover:text-black'></button>
   </div>
    <div className='flex justify-center mt-44 absolute z-10'>
    <div className=' w-[850px] h-[120px] rounded-md shadow-md bg-white '>
      <div className='flex justify-around mt-4 '>
        <div className='flex flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>IP ADDRESS</span>
        <p className='mt-2 font-medium text-gray-900'></p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>LOCATION</span>
        <p className='mt-2 text-gray-900 font-medium'></p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>TIMESTAMP</span>
        <p className='mt-2 text-gray-900 font-medium'></p>
        </div>
        <div className='flex  flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>ISP</span>
        <p className='mt-2 text-gray-900 font-medium'></p>
        </div>
        
        </div>
    </div>
    </div>
    </>
  )
}

export default Results