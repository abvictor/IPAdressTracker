import React,{useState, useEffect} from 'react'
import {CaretRight} from 'phosphor-react'




const SearchBar =  () => {
  const [searchIp, setSearchIp] = useState("")
  const [results, setResults] = useState({})
  

  function handleInputSubmit(){
    setSearchIp(searchIp)
    const endpoint = fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_a8ZOyg1fzsa6qoTXtbXW7FVFLQbfR&ipAddress=${searchIp}`)
    .then((res)=>res.json())
    .then( ( data ) => {
      const searchResults={
        address: data.ip,
        location_city: data.location.city,
        location_region: data.location.region,
        timeStamp: data.location.timezone,
        isp: data.isp 
      }
      setResults(searchResults)
      
      console.log(searchResults)
    })
  }
 
  return (
   <div className='flex justify-center absolute mt-24 z-10'>
    <input 
    placeholder='Search for any IP address or domain'
    type="text" 
    className='w-[450px] h-12 rounded-l-xl p-4'
    value={searchIp}
    onChange={e=> setSearchIp(e.target.value) }
    />
    <button onClick={handleInputSubmit}className='bg-black text-white w-10 rounded-r-xl font-bold text-[18px] hover:bg-gray-700 hover:text-black'><CaretRight className='ml-3' /></button>
   </div>
  )
}

export default SearchBar