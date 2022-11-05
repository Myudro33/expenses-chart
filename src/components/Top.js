import React from 'react'
import logo from '../assets/logo.svg'

const Top = () => {
  return (
    <div className='w-full p-4 h-24 bg-[#ec775f] rounded-xl flex items-center justify-between'>
        <span className='text-white h-full flex flex-col justify-between'>
        <p>My balance</p>
        <h1 className='text-2xl font-semibold'>$921.48</h1>
        </span>
        <img src={logo} alt='logo' />
    </div>
  )
}

export default Top