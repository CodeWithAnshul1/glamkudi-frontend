import React from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import { useState ,useEffect} from 'react';
import { FaArrowLeft,FaShoppingBag, } from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai'
import {motion} from "framer-motion";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import api from "../api/api"



export default function Productdetail() {
  const {id}=useParams();
  const[data ,setdata]=useState("");
  const[loading ,setloading]=useState(false);
  const navigate =useNavigate();
  const[quantity ,setquantity] =useState(1);
  const [selectsize ,setselectsize]=useState("");
  useEffect(()=>{
    userdetail();
  },[]);  

  const userdetail = async()=>{
    try{
      setloading(true);
      const res =await api.get(`/products/detail/${id}`);
      console.log(res.data);
      setdata(res.data.product);
    }
    catch(err){
      console.log(err.response?.data.message);
    }
    finally{
      setloading(false);
    }
  }

  return (
    <>
    <Navbar/>
   <motion.div
    initial={{y:"100vh", opacity:0}} animate={{y:0,opacity:1}} transition={{ease:"easeInOut" , duration :1}}
    className=' box-border min-h-screen bg-gradient-to-r  from-[#f7e9df] via-[#f8e5d6] to-[#fed7ad] w-full pt-40 pb-20 md:py-30 '>
      <div  className='max-w-[1240px] mx-auto px-4'>
          <div className='flex items-center text-[#666666] text-xs w-full font-bold ' onClick={()=>navigate(-1)}><FaArrowLeft size={10}/> Back to  the edit</div>

          <div className='flex flex-col md:flex-row  w-full mt-5  gap-10'>
            <div className=' w-full rounded-lg overflow-hidden'>
              <img src={data.image} alt="error" className='w-full object-cover  h-[370px] sm:h-[420px] md:h-[500px]'/>
            </div>
            <div className=' w-full font-sans'>
              <p className='text-[11px] text-[#bd5d3c] font-semibold tracking-[0.1rem]'>{data.category}.{ data.title}</p>
              <div className=' text-[40px] md:text-[49px] text-brand-dark font-display  font-semibold md:font-bold leading-tight'>
                {data.title}
              </div>
              <div className='mt-3 flex items-baseline gap-2'>
                <span className='text-2xl font-bold text-brand-dark'>₹{Number(data.price).toLocaleString("en-IN")}
                </span>
                <span className='text-neutral-400 text-sm line-through'>₹{(data.price)+1000}</span>
                <span className='text-[#a13917] text-sm font-semibold'>42% off</span>

              </div>
              <span className='text-xs text-neutral-400 tracking-tight '>include all of taxes . Free delivery</span>

              <span className='text-neutral-400 text-sm block mt-4'>{data.discription}</span>

              <div className='mt-10'>
                <p className='text-black tracking-tight font-semibold text-sm'>Select size</p>
                <div className='flex mt-3 gap-2'>
                  {["S","M","L","XL"].map((size)=>
                   <button value ={size}
                    onClick={()=>setselectsize(size)}
                      className={`h-[40px] w-[40px] rounded-md flex items-center justify-center text-sm ${size===selectsize?"bg-[#cd4c21] text-white":"bg-white text-black"}`}>{size}</button>)}
                    {/* <div className='h-[40px] w-[40px] border-1 border-neutral-400 rounded-md flex items-center justify-center text-sm bg-white'>S</div>
                    <div className='h-[40px] w-[40px] border-1 border-neutral-400 rounded-md flex items-center justify-center text-sm bg-white'>M</div>
                    <div className='h-[40px] w-[40px] border-1 border-neutral-400 rounded-md flex items-center justify-center text-sm bg-white'>L</div>
                    <div className='h-[40px] w-[40px] border-1 border-neutral-400 rounded-md flex items-center justify-center text-sm bg-white'>XL</div> */}
                </div>
              </div>

              <div className='flex gap-3 mt-4 w-full '>
                <div className='flex gap-3  items-center bg-white rounded-lg'>
                 <button  className=' hover:bg-neutral-100  px-2 py-2 xl:px-3   rounded-md xl:py-1 cursor-pointer' onClick={()=>setquantity(quantity-1)}
                    disabled={quantity===1}>-</button>
                  <span className='py-1'>{quantity}</span>
                  <button className='hover:bg-neutral-100 px-3 rounded-md py-1 cursor-pointer' onClick={()=>setquantity(quantity+1)}>+</button>

                </div>
                <div className=' text-white font-semibold flex items-center justify-center bg-[#c8542e]  rounded-lg w-full   hover:-translate-y-1 transition duration-200 xl:py-3 cursor-pointer text-sm  xl:text-md'> <span className='text-white mr-2 text-sm xl:text-md'><FaShoppingBag /></span>Add to bag</div>

                <div className='flex items-center justify-center text-2xl border-1 border-neutral-100 px-3 py-1 xl:py-3 bg-white rounded-lg cursor-pointer'><AiOutlineHeart/></div>
              </div>
              <div className='flex w-full items-center justify-center mt-4 border-1 border-[#c8542e] py-2 hover:bg-white rounded-lg text-[#c8542e] font-semibold cursor-pointer'>Buy now</div>

            </div>
          </div>
      </div>
   </motion.div>
   <Footer/>
    </>
  )
}
