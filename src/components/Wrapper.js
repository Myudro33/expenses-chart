import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='xs:w-[95%] md:w-96 xs:h-[95%] md:h-[33rem] flex flex-col  md:justify-between'>{children}</div>
  )
}

export default Wrapper