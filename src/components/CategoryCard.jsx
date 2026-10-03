import React from 'react'

export default function CategoryCard({usrdata}) {
  return (
    <div className='relative min-w-[110px] min-h-[110px] rounded-2xl overflow-hidden cursor-pointer group transition durinton-300 hover:-translate-y-2 '>
        
        <img className='w-full h-full object-cover transition  duration-500 group-hover:scale-105'
        src={usrdata.image}
        alt={usrdata.name}/>
      <div className=' absolute inset-0 bg-gradient-to-t from-black/70 via black/10 to-transparent'>
      <h3 className='absolute bottom-2 left-4 text-white font-semibold text-[15px]' >{usrdata.category}</h3></div>
    </div>
  )
}
