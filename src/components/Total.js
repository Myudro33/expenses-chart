import React from 'react'

const Total = () => {
  return (
    <div className='h-20 w-full flex justify-between items-center'>
      <span className='h-full flex flex-col justify-around'>
        <p className='text-[#93867b]'>Total this month</p>
        <h1 className='font-semibold text-2xl'>$478.33</h1>
      </span>
      <span className='flex flex-col items-end h-full justify-end'>
        <h1 className='font-semibold text-lg'>+2.4%</h1>
        <p className='text-[#93867b]'>from last month</p>
      </span>
    </div>
  )
}

export default Total