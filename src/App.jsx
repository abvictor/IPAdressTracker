import { useState, useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import '../src/styles/global.css'
import Results from './components/Results'
import MapView from './components/Map'

import {HookUseContext} from './hooks/useResultsContext'

function App() {
  
  return (
    <HookUseContext>
    <div className="flex-col justify-center ">
      
      <div className='flex justify-center'>
      <h1 className='absolute justify-center mt-4 text-white font-medium text-[2.5em] font-sans z-10'>IP Address Tracker</h1>
      <Results />
      <img src='/src/assets/pattern-bg.png' className='w-full h-60 relative z-0'/>
      </div>   
      
      <MapView />
    
    </div>
    </HookUseContext>
  )
}

export default App
