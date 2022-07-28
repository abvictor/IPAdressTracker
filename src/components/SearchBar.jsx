import React from 'react'
import {CaretRight} from 'phosphor-react'



const SearchBar = () => {
  return (
   <div className='flex justify-center absolute mt-24'>
    <input 
    placeholder='Search for any IP address or domain'
    type="text" 
    className='w-[450px] h-12 rounded-l-xl p-4'
    />
    <button className='bg-black text-white w-10 rounded-r-xl font-bold text-[18px] hover:bg-gray-700 hover:text-black'><CaretRight className='ml-3' /></button>
   </div>
  )
}

export default SearchBar