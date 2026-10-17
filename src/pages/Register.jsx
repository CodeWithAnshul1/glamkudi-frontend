import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FaEyeSlash ,FaEye} from 'react-icons/fa';

export default function Register() {
    const navigate=useNavigate();
    const [otpbox ,setOtpbox]=useState(false);
    const [name ,setName]=useState("");
    const [email ,setEmail]=useState("");
    const [show ,setShow]=useState(false);
    const [password ,setPass]=useState("");
    const [loading , setLoading]=useState(false);
    const createacc =async()=>{

    }
  return (
    <div className='w-full h-screen bg-gradient-to-r from-[#f7e9df] via-[#f8e5d6] to-[#fed7ad] flex items-center justify-center px-3'>
        <form
            onSubmit={createacc}
            className='w-full  bg-[#f7e9df]  rounded-2xl px-3 xl:px-7 py-10 space-y-7 max-w-[470px] mx-auto   border border-[#e9e3dc] shadow-[0_20px_60px_rgba(48,39,35,0.08)]'>
            <h1 className='text-3xl font-semibold font-display tracking-tight  text-brand-dark'>Hey ,Gorgeous</h1>
            {/* <span>Your next obsession might be one click away . Sign up and find pieces that match your vibe</span> */}
            <div className='text-[#756d68] leaading-6 text-center '>Sign up to continue your GlamKudi journey.</div>

            {!otpbox ?(
                <>
                <input type="text"
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                 required
                 placeholder='Your good name'
                 className='w-full border border-[#ded6cf] rounded-xl p-3 bg-transparent outline-none text-[#302723]
                    placeholder:text-[#aaa09a] focus:border-[#bd5d3c]  focus-within:ring-2
                focus-within:ring-[#bd5d3c]/10
                transition'/>

                <input type="text"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 required
                 placeholder='You@example.com'
                 className='w-full border border-[#ded6cf] rounded-xl p-3 bg-transparent outline-none text-[#302723]
                    placeholder:text-[#aaa09a] focus:border-[#bd5d3c]  focus-within:ring-2
                focus-within:ring-[#bd5d3c]/10
                transition'/>
                <div className='relative'>

                 <input type={show? "text":"password"}
                 value={password}
                 onChange={(e)=>setPass(e.target.value)}
                 required
                 placeholder='Password'
                 className='w-full border border-[#ded6cf] rounded-xl p-3 bg-transparent outline-none text-[#302723]
                    placeholder:text-[#aaa09a] focus:border-[#bd5d3c]  focus-within:ring-2
                focus-within:ring-[#bd5d3c]/10
                transition'/>

                <span className='absolute right-3 top-4 text-[#aaa09a]'
                onClick={()=>setShow(!show)}>{show?<FaEyeSlash/> :<FaEye/>}</span>
                </div>

                <button type="submit"
                disabled={loading} className='bg-[#bd5d3c] text-white font-semibold  py-3 rounded-lg w-full'>{loading ? "Creating...": "Sign up"}
                </button>

                <div className='flex itmes-center justify-center text-gray-500'><p>Alreary have an account? </p>
                <button onClick={()=>navigate("/login")} className='text-[#bd5d3c] font-medium'>Sign in</button></div>

                <div className="flex items-center gap-4 mt-8">

                 <div className="flex-1 border-t border-dotted border-[#ded6cf]" />

                      <span className="text-[11px] text-[#aaa09a]">
                         GLAMKUDI
                      </span>

                 <div className="flex-1 border-t border-dotted border-[#ded6cf]" />

          </div>

                </>
                 
            ):(ff)}


        </form>
      
    </div>
  )
}
