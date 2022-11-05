import React from 'react'
import data from '../data/data.json'
import Chart from './Chart'

const ChartWrapper = () => {
  return (
    <div className='w-full h-60  flex justify-between my-5'>
        {data.map((chart)=>(
            <div key={chart.amount} className='w-10 h-full flex flex-col justify-end items-center'>
            <Chart height={chart.amount}/>
            <h1 className='text-[#93867b]'>{chart.day}</h1>
            </div>
        ))}
    </div>
  )
}

export default ChartWrapper