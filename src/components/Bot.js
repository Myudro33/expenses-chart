import React from 'react'
import ChartWrapper from './ChartWrapper'
import Total from './Total'

const Bot = () => {
  return (
    <div className='w-full h-[26rem] xs:my-4 md:my-0 bg-white rounded-xl p-4'>
        <h1 className='text-2xl text-[#382314] font-semibold'>Spending - Last 7 days</h1>
        <ChartWrapper/>
        <Total/>
    </div>
  )
}

export default Bot