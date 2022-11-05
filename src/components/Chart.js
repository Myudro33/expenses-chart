import React,{useState} from 'react'

const Chart = ({height}) => {
  const [show, setshow] = useState(false)
  console.log(`${String(height)}%`);
  return <div onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}  style={{height:`${height}%`}} className={`w-full my-1 bg-[#ec775f]  hover:bg-[#76b5bc] flex justify-center rounded-lg`}>
    {show&&(
      <p className='text-xs -translate-y-5 font-bold'>{height}%</p>
    )}
    </div>
  
}

export default Chart