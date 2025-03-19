import React from 'react'
import Navbar from '../NavComp/Navbar'
import HeroSection from './HeroSection'
import Blog from './Blog'
import BlogCurrent from './BlogCurrent'
import Footer from '../NavComp/Footer'
import PetDetails from './PetDetails'

function Home() {
  return (
    <div className='home-main'>
         <Navbar /> 
         <HeroSection />
        <Blog />
        <BlogCurrent />
        <Footer /> 
        {/* <PetDetails /> */}

    </div>
  )
}

export default Home