import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import AppRoutes from './Routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AppRoutes/>
    {/* <Navbar/>
    <Hero/>
    <ProductCard/>
    <Footer/> */}
    </>
  )
}

export default App
