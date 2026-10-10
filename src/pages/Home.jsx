
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import {products} from "../assets/product"
import ProductCard from '../components/ProductCard';
import {useState ,useEffect} from "react";
import api from "../api/api";

export default function Home() {
  const [data ,setdata]=useState([]);
  const [count ,setcount]=useState("");
 useEffect(()=>{
  fetchuser()
 },[]);

//  const fetchuser =async ()=>{
//   try{
//     const res = await api.get("/products/product-fetch");

//     setdata(res.data.product);
//     setcount(res.data.count);
//     console.log(data,count);
    

//   }catch(err){
//     console.log(err);

//   }
const fetchuser = async () => {
  try {
    const res = await api.get("/products/product-fetch");

    console.log("FULL API RESPONSE:", res.data);

    setdata(res.data.product || []);
    setcount(res.data.count ?? 0);
  } catch (err) {
    console.log("API ERROR:", err.response?.data || err.message);
  }
};

 

  return (
    <div>
        <>
        <Navbar/>
        <Hero/>
        <div className='w-full py-8 bg-[rgb(252,244,237)]  font-DM Sans, Arial, sans-serif'>
          <div className=' flex gap-3  max-w-[1240px] mx-auto px-2 xl:px-0 '>
            <div className='hidden xl:block'></div>
            <div className=' w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 transition transform-300 hover:translate-y-'>
                {data.map((item)=>(
                  
                         <ProductCard
                    key={item._id}
                    data={item}
                    />

                   
                ))}
            </div>
          </div>
        </div>
        <Footer/>
      </>
    </div>
  );
}
