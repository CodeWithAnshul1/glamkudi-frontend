 import {FaInstagram , FaFacebook ,FaEnvelope} from "react-icons/fa"

export default function Footer() {
  return (
    <footer className=' w-full bg-[#332722] text-white '>
      <div className="max-w-[1243px] mx-auto">
    <div className='   mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 pt-15  px-5 xl:px-0 border-b border-[#817771] pb-6'>

      <div className='' >
          <div className='flex gap-2 items center '>
             <div className='bg-[#bd5d3c]   h-[35px] w-[35px] xl:h-[42px] xl:w-[42px] items-center flex justify-center rounded-lg overflow-hidden'>
                <span className='font-serif  text-[28px] italic font-bold'>G</span>
                {/* <img  className="  object-cover w-full h-10" src="\src\assets\fav.png" /> */}
             </div>
            <span className='  text-[23px] xl:text-[30px] font-bold font-serif'>glamkudi</span>
           </div>
        <span className='text-xs text-[#b8aaa2] leading-[1.25] tracking-wider'>Thoughtfull  fashion for every verson of you.</span>
        <div className="flex items center gap-6 mt-3">
          <a  href="#" className="hover:text-blue-700 "><FaFacebook size={20}/></a>
          <a  href="#" className="hover:text-[#E1306c]"><FaInstagram size={20}/></a>
        </div>
        
      </div>

      <div className=" flex flex-col space-y-2">
        <span className="font-semibold text-sm mb-3 ">SHOP</span>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">New Ariavals</a>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">Dresses</a>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">Footwear</a>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">Bags</a>


      </div>

      <div className="flex flex-col space-y-2">
        <span className="text-sm font-semibold mb-3">HELP</span>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">Contactus</a>
        <a href="#" className="text-sm text-[#b8aaa2] cursor-pointer hover:text-white">Return</a>

      </div>

    </div>
    <div className="flex items center py-4 justify-between px-2 xl:px-0">
      <span className="text-[#b8aaa2] text-xs">@ 2026 ekta. Made with care</span>
      <span className="text-[#b8aaa2] text-xs  flex  items-center "><p className="pr-2 cursor-pointer"><FaEnvelope size={15}/></p> anshulmogha50@gmail.com</span>
      
    </div>
    </div>
    </footer>
  )
}
