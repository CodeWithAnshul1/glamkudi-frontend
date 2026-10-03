import React from 'react'
import heroimage from '../assets/hero.png'

import {products } from '../assets/product';
import CategoryCard from './CategoryCard';

export default function Hero() {

  return (
     <section className="  w-full bg-[#fffdf9]   mt-[120px] md:mt-[70px] px-4 sm:px-6  py-6 sm:py-10 ">
      

      
       <div className=" relative  max-w-[1240px] mx-auto min-h-[580px] rounded-[32px] bg-gradient-to-r from-[#f7e9df] via-[#f8e5d6] to-[#ffd9ad] shadow-[0_20px_50px_rgba(48,39,35,0.08)] overflow-hidden flex flex-col md:flex-row md:items-center justify-between pt- ">
         {/* Background Glow */}
        {/* <div
          className="
            absolute
            right-[28%]
            top-1/2
            -translate-y-1/2
            w-[400px]
            h-[400px]
            bg-[#fff4e8]/50
            rounded-full
            blur-3xl
          "
        ></div> */}

        {/* Content */}
        <div className="relative z-10  w-full md:w-[48%]  px-6 sm:px-10  md:px-14 md:pr-0 py-10 xl:py-0">

          <p className="text-sm tracking-[0.2em] font-semibold text-[#bd5d3c] mb-5">
            ✨ THE NEW SEASON EDIT
          </p>

          <h1 className=" max-w-[520px]  text-[42px] sm:text-[50px] md:text-[60px] leading-[1.05] font-serif font-bold text-[#302723] tracking-tight">
            Designed for
            <br />
            every version 
            {/* <br /> */}
             <span className=' text-[#bd5d3c] italic'> of</span>
             <br/>
              you.
          </h1>

          <p className="mt-6 max-w-[430px] text-[15px] leading-7 text-[#756d68]">
           New silhouettes, thoughtful beauty and everyday treasures
            
             — collected for your best dressed days.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-8">

            <button className=" px-1 md:px-5 py-2.5 rounded-xl bg-[#bd5d3c] text-white font-semibold hover:bg-[#a94f32] transition">
              Shop new arrivals
            </button>

            <button className="px-3 py-2.5 text-[#302723] font-semibold underline underline-offset-4 hover:text-[#bd5d3c] transition">
              Explore dresses →
            </button>

          </div>
          <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-12 text-xs sm:text-sm text-[#756d68]">
             <span>
             <strong className="text-[#302723]">15%</strong> first order
            </span>

            <span className="text-[#bd5d3c]">•</span>

             <span>
            Easy <strong className="text-[#302723]">3-day returns</strong>
            </span>
            </div>

        </div>

        {/* Image */}
        <div className=" relative
            z-10 w-full
            md:w-[52%]
            h-full
            flex
            items-center
            justify-center
            md:justify-end
            ">

          <img
            src={heroimage}
            alt="New collection"
            className="w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px]  h-[300px] sm:h-[380px] md:h-[480px] object-contain mb-5 md:mb-0 "
          />

        </div>
        

       </div>
      
      <div className='max-w-[1240px] mx-auto my-15 z-300'>
        <p className="text-xs text-[#bd5d3c] font-semibold"> SHOP BY MOOD</p>
        <p className='text-4xl text-black italic font-semibold pt-3'>Your everyday, beautifully chosen</p>
        <div className='w-full gap-3  flex overflow-x-auto  overflow-y-hidden mt-5 scrollbar-none'>
          {products.map((usr)=>(
            <CategoryCard
            key={usr.id}
            usrdata={usr}/>
          ))}

        </div>
      </div>

    </section>
  );
}