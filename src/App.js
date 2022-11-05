import React from 'react'
import Bot from './components/Bot'
import Top from './components/Top'
import Wrapper from './components/Wrapper'

const App = () => {
  return (
    <div className='flex bg-[#f8e9dd] w-full h-screen justify-center items-center'>
      <Wrapper>
        <Top/>
        <Bot/>
      </Wrapper>
    </div>
  )
}

export default App