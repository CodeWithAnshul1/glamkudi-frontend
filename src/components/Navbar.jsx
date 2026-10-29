import { FiHome, FiHeart, FiShoppingBag, FiUser, FiSearch, FiMenu, FiX  ,FiGrid } from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {
  const [active, setactive] =useState("home");
  const[menuOpen , setmenuOpen] =useState(false);
  const{user}=useAuth();
  const navigate=useNavigate();
  return (
    <nav className='w-full bg-[#fffdf9] border-b border-[#e9e3dc] fixed top-0 z-500'>
            {/*desktop navbar */}
            <div className=' hidden md:flex  items-center justify-between max-w-[1240px] mx-auto  h-[70px] px-6'>
              {/*logo*/}
              <div className='flex items-center gap-2 cursor-pointer'>
                <div className='w-[42px] h-[42px] rounded-lg flex items-center bg-[#bd5d3c] justify-center '>
                  <span className="text-white text-[28px] font-serif italic font-bold">
                    G</span>

                </div>
                <span className=' text-[#302723] text-[30px] font-serif font-bold'>glamkudi</span>
              </div>

              {/*Search*/}
              <div className='flex items-center w-[520px] h-[40px] border border-[#ded6cf] rounded-xl overflow-hidden bg-white m-2'>
                <FiSearch 
                size={20}
                className="ml-4 text-[#8b817b]"/>

                <input type="text"
                placeholder="Search dresses , bags , makeup and more"
                className="flex-1 outline-none ml-2"/>

                <button className="h-[30px] mr-1.5 px-4 xl:px-6 rounded-xl bg-[#2d2927] text-white text-sm font-semibold hover:bg-[#403a37] transition">
                  Search
                </button>
                
              </div>
            {/*Navigation*/}
              <div className="flex items-center gap-7 ">
                <Navitem
                icon={<FiHome size={20}/>}
                label="home"
                active={active ==="home"}
                onClick={()=>{setactive("home");
                  navigate("/");
                }}
                />

                <Navitem icon={<FiHeart size={20} />} 
                label="Wishlist" 
                active={active ==="wishlist"}
                onClick={()=>{setactive("wishlist");
                  navigate("/wishlist")
                }}/> 
                
                <Navitem icon={<FiShoppingBag size={20} />} 
                label="Bag" 
                active={active ==="bag"}
                onClick={()=>{setactive("bag");
                  navigate("/bag")
                }}/> 
                
                <Navitem icon={<FiUser size={20} />} 
                label="Profile" 
                active={active ==="profile"}
                onClick={()=>{setactive("profile");
                  navigate("/profile");
                }}
                />

                {user?.role==="admin" &&(<Navitem icon={<FiGrid size ={20} />} 
                label ="admin"
                active ={active === "admin"}
                onClick={()=> {setactive("admin");
                  navigate("/admin/add-product");
                }}/>)}

              </div>
            
            </div>

            {/*mobile navbar*/}
           <div className="md:hidden">
             {/* Top */} 
             <div className="flex items-center justify-between px-5 h-[70px]"> 
              {/* Logo */} 
              <div className="flex items-center gap-2"> 
                <div className="w-[39px] h-[39px] rounded-lg bg-[#bd5d3c] flex items-center justify-center">
                   <span className="text-white text-[26px] font-serif italic font-bold">
                     g
                   </span> 
                  </div> 
                  <span className="text-[27px] font-serif font-bold text-[#302723]"> 
                    glamkudi
                  </span> 
                </div> 
                <button className="text-[#302723] z-60"
                onClick={()=>setmenuOpen(!menuOpen)}> 
                  {menuOpen?<FiX size ={27}/>:<FiMenu size={27} />} 
                </button> 
                </div> 
                {/* Mobile Search */} 
              <div className="px-5 pb-2"> 
                <div className="flex items-center h-[48px] border border-[#ded6cf] rounded-xl bg-white overflow-hidden"> 
                    <FiSearch size={20} className="ml-4 text-[#8b817b]" /> 
                    <input type="text" placeholder="Search products" className="flex-1 h-full px-4 outline-none text-sm" /> 
                    <button className="h-[40px] w-[40px] mr-1 rounded-xl bg-[#2d2927] flex items-center justify-center text-white"> 
                     <FiSearch size={20} /> 
                    </button> 
                </div> 
              </div> 

              {/*menubar item*/}
              <div
  className={`
    absolute right-0 top-0 z-50
    w-full
    rounded-b-xl
    bg-[#f8e8e2]/95
    backdrop-blur-sm
    shadow-lg
    p-4
    transition-all duration-300 ease-out fixed top-0
    ${
      menuOpen
        ? "translate-x-0 translate-y-0 opacity-100 scale-100"
        : "translate-x-8 -translate-y-2 opacity-0 scale-95 pointer-events-none"
    }
  `}
>
  <div className="flex flex-col gap-3 text-[#302723] ml-5 ">
    <button className=" flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
    onClick={()=> navigate("/")}>
      <FiHome size={18}  />
      <span>Home</span>
    </button>

    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
      onClick={()=>navigate("/wishlist")}>
      <FiHeart size={18} />
      <span>Wishlist</span>
    </button>

    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
      onClick={ ()=>navigate("/bag")}>
      <FiShoppingBag size={18} />
      <span>Bag</span>
    </button>

    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
      onClick={ ()=>navigate("/profile")}>
      <FiUser size={18} />
      <span>Profile</span>
    </button>

    <button className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10"
      onClick={()=>navigate("/admin/add-product")}>
      <FiGrid size={18} />
      <span>Admin</span>
    </button> 

  </div>
</div>
            </div>
    </nav>
  );
}
const Navitem = ({ icon, label, active ,onClick }) => { 
  return ( 
  <div onClick={onClick}
  className={`flex flex-col items-center gap-1 cursor-pointer transition
     ${ active ? "text-[#bd5d3c]" : "text-[#756d68] hover:text-[#bd5d3c]" }`} > 
     {icon} <span className="text-[12px] font-medium"> {label} </span> </div> 
     );
    };
