import React from 'react'
import SEO from "../components/SEO"
import Navbar from '../components/Navbar'

export default function Wishlist() {
  return (
    <>
    <SEO
      title="My Wishlist"
      description="Save your favourite dresses, handbags, beauty products and accessories in your Glamkudi wishlist. Find your favourite styles whenever you want."
      canonical="https://glamkudi.in/whislist"
      robots="noindex, follow"/>
      <Navbar/>
    <div className='flex h-screen justify-center items-center text-brand-dark font-bold font-display text-xl'>
        Comming soon 
      
    </div>
    </>
  )
}
