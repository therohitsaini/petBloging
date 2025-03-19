import React from 'react'
import CurrentBlog from "../Data/BlogData.json/"

const newCardData = CurrentBlog.CurrentBlog

function BlogCurrent() {
    return (
        <>
            <div className='Card-main border border-black w-full px-20 mt-10  mb-10 bg-slate-100 py-5 border-none'>
                <h1 className='text-xl font-semibold mb-2'>Learan Current...</h1>
                <div className='grid grid-cols-3 gap-5 bg-gray-200'>
              {
                newCardData.map((data) =>{
                    return (
                        <section className='card-data bg-white shadow-xl transition-transform hover:shadow-2xl hover:translate-x-1 duration-400'>
                        <div className='h-72'>
                            <img className='h-full w-full object-cover ' src={data.img} />
                        </div>
                        <div className='flex flex-col gap-5 mb-2 px-2 py-2'>
                            <div className='flex flex-col gap-1'>
                            <h1 className='font-bold text-md px-2 text-red-400'>{data.heading}</h1>
                            <p className='font-semibold text-sm px-2 text-slate-600'>{data.description}</p>
                            </div>
                            {/* <span className='font-semibold text-sm px-2 text-slate-600 '>Pet Care <span>. {data.postData}</span> </span>     */}
    
                        </div>
                    </section>
                    )
                })
              }
</div>
            </div>

        </>
    )
}

export default BlogCurrent;