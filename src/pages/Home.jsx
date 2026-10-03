
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar'
import {products} from "../assets/product"
import ProductCard from '../components/ProductCard';

export default function Home() {
  return (
    <div>
        <>
        <Navbar/>
        <Hero/>
        <div className='w-full py-8 bg-[rgb(252,244,237)]  font-DM Sans, Arial, sans-serif'>
          <div className=' flex gap-3  max-w-[1240px] mx-auto px-2 xl:px-0 '>
            <div className='hidden xl:block'></div>
            <div className=' w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 transition transform-300 hover:translate-y-'>
                {products.map((item)=>(
                    <ProductCard
                    key={item.id}
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
