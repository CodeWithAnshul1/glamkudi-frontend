import React from 'react'
import Footer from '../../components/Footer'
import ProfileSidebar from '../../components/Slidebar'
import {FiUser} from "react-icons/fi"
import {useNavigate,Link,Outlet} from "react-router-dom"
import { useAuth } from '../../context/AuthContext'

export default function Profile() {
    const {user,logout} = useAuth();
  const navigate =useNavigate();
  console.log(user);

    const handleLogout=async()=>{
        logout();
    }
  if(!user) return (
    <div>

      <div className='bg-gradient-to-r from-[#f7e9df] via-[#f8e5d6] to-[#fed7ad] w-full py-20 px-5'>
        <div className='max-w-[1240px] bg-gradient-too-r from-white  to-[rgba(250,207,173,0.75)] mx-auto border border-dashed  border-[#ded6cf] rounded-lg flex flex-col items-center py-15 px-4'>
            <p className=' text-[#a25d43] mb-5 font-bold'><FiUser size={30}/></p>
            <p className=' text-2xl md:text-3xl font-bold font-["Playfair_Display"]'>Welcome to GlameKudi.</p>
            <p className='text-[15px]  font-["sans-sarif"] mt-2'>sign in to see yout order, save item and personal detail</p>
              <Link
            to="/login"
            className="mt-6 inline-block rounded-xl bg-[#bd5d3c] px-8 py-3 text-white"
          >
            Sign In
          </Link>
        </div>

      </div>
      <Footer/>
    </div>
  )
  return(
    <section className="min-h-screen bg-[#fffdf9] px-4 py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 md:grid-cols-[260px_minmax(0,1fr)]">

        <ProfileSidebar onLogout={handleLogout} />

        <main className="min-h-[600px] min-w-0 rounded-2xl border border-[#e9e3dc] bg-white p-5 shadow-sm sm:p-8">
          <Outlet />
        </main>

      </div>
    </section>


    )


}
