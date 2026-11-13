import React from 'react'
import SEO from '../components/SEO'
import Navbar from '../components/Navbar'

export default function Bag() {
  return (
    <>
    <SEO title="My shoping bag"
          description="Review your selected fashion, beauty and lifestyle products before placing your order at Glamkudi."
          canonical="https://glamkudi.in/bag"
          robots="noindex,follow"/>
    <Navbar/>
    <div className='flex h-screen justify-center items-center text-brand-dark font-bold font-display text-xl '>
        Comming soon
      
    </div>
    </>
  )
}
