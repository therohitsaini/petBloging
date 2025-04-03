import React from 'react'
import BlogData from "../Data/BlogData.json"
import Navbar from '../NavComp/Navbar'
import HeroSection from './HeroSection'
import Footer from '../NavComp/Footer'
import { Link } from 'react-router-dom'
// import {Animation_Wrapper} from "../StyledComponents/Styled"

const newCardData = BlogData.blogData

function Blog() {
    return (
        <>
        <Navbar />
        {/* <HeroSection /> */}
            <div className='Card-main border border-black w-full px-20 mt-10  mb-10 bg-slate-100 py-5 border-none max-sm:px-2 max-sm:py-2'>
                <p className='font-semibold max-sm:text-3xl pb-3'>Bloges</p>
                <div className='grid grid-cols-3 gap-5 bg-gray-200 max-sm:grid-cols-1'>
              {
                newCardData.map((data) =>{
                    return (
                        <Link to={"/blogdetails"}>
                        <section className='card-data bg-white shadow-xl transition-transform hover:shadow-2xl hover:translate-x-1 duration-400'>
                        <div className='h-96 max-sm:h-96'>
                            <img className='h-full w-full object-cover ' src={data.img} />
                        </div>
                        <div className='flex flex-col gap-5 mb-6 px-2 py-5'>
                            <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-xl px-2'>{data.heading}</h1>
                            <p className='font-semibold text-md px-2 text-slate-600'>{data.description}</p>
                            </div>
                            <span className='font-semibold text-sm px-2 text-slate-600 '>Pet Care <span>. {data.postData}</span> </span>
    
                        </div>
                    </section>
                    </Link>
                    )
                })
              }
</div>
            </div>
            <Footer />

        </>
    )
}

export default Blog