import React from 'react'
import { FaRegUser} from 'react-icons/fa'
import { FiHeart, FiShoppingBag,  FiMapPin, FiLock,FiArrowRight} from "react-icons/fi"
import { useAuth } from '../../context/AuthContext'
import { GiLotus } from "react-icons/gi";

export default function Profiledetail() {
  const {user}=useAuth();
  return (
   <div className='w-full h-full m-0.2'>
    <div className='w-full flex gap-5'>
      <div className=' items-center  justify-center rounded-full p-7  bg-[#F7DCCB] text-xl text-[#BD6849]'>
        <FaRegUser/></div>
      <div>
        <h1 className='text-2xl font-display  text-brand-dark'>{user.name}</h1>
        <p className='text-xs'>{user.email}</p>
        <div className='text-brand-dark bg-[#F7DCCB] px-2  rounded-xl text-xs w-fit mt-1 '>member since 2025</div>
        
      </div>
    </div>

    <div className='flex mt-4 gap-4 '>
      <div className=' w-full lg:w-[70%] md:pb-5'>
        <p className='text-brand-dark font-bold font-display text-md md:text-lg xl:text-xl'>Personal Information</p>
        <div className='pt-2'>
          <div className='flex justify-between w-70% px-7  py-3 md:py-5  rounded-t-lg border border-neutral-400'><p>Full name</p><p>{user.name}</p></div>
          <div className='flex justify-between w-70% px-7  py-3 md:py-5   rounded-b-lg border border-neutral-400'><p>Email</p><p>{user.email}</p></div>
        </div>
        
      </div>

      <div className='hidden lg:block  w-[30%] bg-[#FCE9DC] p-6 rounded-xl'>
        <span><GiLotus size={20} color="#bd5d3c"/></span>
        <h1 className=' text-lg xl:text-xl font-bold text-brand-dark font-display '>welcome to glamkudi</h1>
        <div className='text-xs text-neutral-600 mt-3 '>Your style,Your story. We're so happy to have you here</div>
      </div>
     
     </div>

     <div>
      <p className='text-brand-dark font-bold'>Quick Assess</p>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-3 '>
        <div className='border border-neutral-300 p-5 rounded-lg'>
          <span><FiShoppingBag size={25} color='#bd5d3c'/></span>
          <h1 className='text-sm text-brand-dark font-bold py-2'>My orders</h1>
          <span className='text-xs text-neutral-500  block leading-tight'>Track your orders <br></br>and view history</span>
          <button className='mt-5 bg-[#c56748] rounded-full p-2 text-white hover:-translate-y-1 transition duration-200'><FiArrowRight size ={20} /></button>

        </div>
        <div className='border border-neutral-300 p-5 rounded-lg'>
          <span><FiHeart size={25} color='#bd5d3c'/></span>
          <h1 className='text-sm text-brand-dark font-bold py-2'>Wishlist</h1>
          <span className='text-xs text-neutral-500  block leading-tight'>Your saved <br></br>favorurite items</span>
          <button className='mt-5 bg-[#c56748] rounded-full p-2 text-white hover:-translate-y-1 transition duration-200'><FiArrowRight size ={20} /></button>
        </div>
        <div className='border border-neutral-300 p-5 rounded-lg'>
          <span><FiMapPin size={25} color='#bd5d3c'/></span>
          <h1 className='text-sm text-brand-dark font-bold py-2'>Saved Address</h1>
          <span className='text-xs text-neutral-500  block leading-tight'>Manage your delivery  <br/> Address</span>
          <button className='mt-5 bg-[#c56748] rounded-full p-2 text-white hover:-translate-y-1 transition duration-200'><FiArrowRight size ={20} /></button>
        </div>
        <div className='border border-neutral-300 p-5 rounded-lg'><span><FiLock size={25} color='#bd5d3c'/></span>
          <h1 className='text-sm text-brand-dark font-bold py-2'>Change password</h1>
          <span className='text-xs text-neutral-500  block leading-tight'>Keep your account  <br/>Secure</span>
          <button className='mt-5 bg-[#c56748] rounded-full p-2 text-white hover:-translate-y-1 transition duration-200'><FiArrowRight size ={20} /></button></div>

      </div>
     </div>


        
        

   </div>
  )
}
