import React from 'react'

const Results = () => {
  return (
    <div className='flex justify-center relative mt-44 z-10'>
    <div className=' w-[850px] h-[120px] rounded-md shadow-md '>
      <div className='flex justify-around mt-4'>
        <div className='flex flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>IP ADDRESS</span>
        <p className='mt-2 font-medium text-gray-900'>192.198.0.16</p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>LOCATION</span>
        <p className='mt-2 text-gray-900 font-medium'>BRAZIL</p>
        </div>
        <div className='flex flex-col '>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>TIMESTAMP</span>
        <p className='mt-2 text-gray-900 font-medium'>UTC-05:00</p>
        </div>
        <div className='flex  flex-col'>
        <span className='text-gray-500 mt-4 font-medium text-sm leading-relaxed'>ISP</span>
        <p className='mt-2 text-gray-900 font-medium'>SpaceX Starlink</p>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Results