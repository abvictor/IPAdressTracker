import { useState } from 'react'

import '../src/styles/global.css'
import SearchBar from './components/SearchBar'
import Results from './components/Results'



function App() {


  return (
    <div className="flex-col justify-center ">
      <div className='flex justify-center'>
      <h1 className='absolute justify-center mt-4 text-white font-medium text-[2.5em] font-sans'>IP Address Tracker</h1>
      
      
      <SearchBar />
      
     
      </div>
     
      <img src='/src/assets/pattern-bg.png' className='w-full h-60'/>
      <Results />
      
      
   
    </div>
  )
}

export default App
