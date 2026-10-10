import React from 'react'
import { FaHeart } from 'react-icons/fa'

export default function ProductCard({data}) {
  return (
    <>
    
    <div className='min-w-[110px] transition transform-300 hover:-translate-y-2 '>

      <div className=' relative group   xl:h-[300px] w-full overflow-hidden rounded-t-2xl'>
        <img className='w-full  object-cover transition duration-500 group-hover:scale-105' src={data.image} alt="error"/>
        <button className='absolute top-3 right-3 rounded-full bg-white p-2'>
            <FaHeart size={20}/>
        </button>
        <button className='absolute bottom-4 right-2 md:left-2 bg-[#2c2522] text-white text-xs py-1 md:py-2 px-2  md:px-5 md:opacity-0 md:translate-y-full md:group-hover:opacity-100 md:group-hover:translate-y-0 duration-300  rounded-md'>Quick add</button>
        
      </div>
      <div className='bg-white text-black rounded-b-2xl p-3'>
        <p className='text-[10px]'>{data.category}</p>
        <p className='text-sm md:text-md  font-semibold '>{data.title}</p>
        <p className='text-sm font-bold'>₹{Number(data.price).toLocaleString('en-IN')}</p>
        <p>size s . m .l .xl .xxl </p>

      </div>
    </div>
    </>
  )
}
