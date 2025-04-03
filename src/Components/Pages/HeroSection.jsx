import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function HeroSection() {

  return (
    <div className=' w-full border border-black border-none'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* <div> */}
           <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src="../public/dog wit girl.jpg" />
           <div className='man absolute top-2 w-full h-[480px] border border-red-600 flex items-center justify-center border-none flex-col'>
            {/* <h1 className='font-semibold text-4xl w-[500px] text-center text-cyan-500'>Experienced staff ensuring safety and happiness always.</h1> */}
            {/* <button className=' border border-white px-10 py-2  font-semibold text-xl rounded-md text-white'>Submit</button> */}
          </div> 
           {/* </div> */}
        
        </SwiperSlide>
        <SwiperSlide> <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src='https://img.freepik.com/premium-photo/portrait-young-woman-looking-away_1048944-2461624.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid' />
        </SwiperSlide>
        <SwiperSlide> <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src='https://img.freepik.com/free-photo/girl-forest_1157-7054.jpg?uid=R167309508&ga=GA1.1.1966480882.1738846517&semt=ais_hybrid' />
        </SwiperSlide>
        <SwiperSlide> <img className='h-[500px] w-full object-cover max-sm:h-[300px]' src='../src/assets/view-cats-dogs-being-friends.jpg' />
        </SwiperSlide>

      </Swiper>
      {/* <img className='h-96 w-full object-cover' src='../src/assets/selective-focus-shot-adorable-weimaraner-dog-outdoors-daylight_181624-59028.jpg' />
        <h1 className=' absolute '>hhh</h1> */}
    </div>
  )
}

export default HeroSection