import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import '../src/styles/global.css'
import SearchBar from './components/SearchBar'
import Results from './components/Results'
import Map from './components/Map'



function App() {

  return (
    <div className="flex-col justify-center ">
      <div className='flex justify-center'>
      <h1 className='absolute justify-center mt-4 text-white font-medium text-[2.5em] font-sans z-10'>IP Address Tracker</h1>
      {/* <SearchBar /> */}
      <Results />
      <img src='/src/assets/pattern-bg.png' className='w-full h-60 relative z-0'/>
      </div>   
      
      <Map />
    
    </div>
  )
}

export default App
