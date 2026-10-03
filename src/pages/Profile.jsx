import React from 'react'
import Footer from '../components/Footer'
import {FiUser} from "react-icons/fi"
import {useNavigate} from "react-router-dom"

export default function Profile() {
  const navigate =useNavigate();
  return (
    <div>

      <div className='bg-gradient-to-r from-[#f7e9df] via-[#f8e5d6] to-[#fed7ad] w-full py-20 px-5'>
        <div className='max-w-[1240px] bg-gradient-too-r from-white  to-[rgba(250,207,173,0.75)] mx-auto border border-dashed  border-[#ded6cf] rounded-lg flex flex-col items-center py-15 px-4'>
            <p className=' text-[#a25d43] mb-5 font-bold'><FiUser size={30}/></p>
            <p className=' text-2xl md:text-3xl font-bold font-["Playfair_Display"]'>Welcome to GlameKudi.</p>
            <p className='text-[15px]  font-["sans-sarif"] mt-2'>sign in to see yout order, save item and personal detail</p>
            <buttom className="bg-[#da7955] px-5 py-2 rounded-lg text-white font-semibold mt-8  hover:bg-[#d9653b] hover:-translate-y-0.5 duration-300  transition "
              onClick ={()=>navigate("/login")}>Sign in</buttom>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
