import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import SwiperRatingCard from './SwiperRatingCard';
const SwiperRating = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false
    }}
      pagination={{
        clickable: true,
      }}
      navigation
      
      className='w-full md:w-1/2 h-64 md:52'
      
    >
      <SwiperSlide><SwiperRatingCard name={"John Doe"} position={'President'} quote={'Flexwave just ‘get on with the job’. They co ordinate a project from start to finish and are reliable, creative and produce inspiring ideas '} rating={'4'}/></SwiperSlide>
      <SwiperSlide><SwiperRatingCard name={"John Doe"} position={'CEO, Ethnotel'} quote={'Flexwave just ‘get on with the job’. They co ordinate a project from start to finish and are reliable, creative and produce inspiring ideas '} rating={'5'}/></SwiperSlide>
      <SwiperSlide><SwiperRatingCard name={"John Doe"} position={'President'} quote={'Flexwave just ‘get on with the job’. They co ordinate a project from start to finish and are reliable, creative and produce inspiring ideas '} rating={'4'}/></SwiperSlide>
      <SwiperSlide><SwiperRatingCard name={"John Doe"} position={'President'} quote={'Flexwave just ‘get on with the job’. They co ordinate a project from start to finish and are reliable, creative and produce inspiring ideas '} rating={'5'}/></SwiperSlide>
      
      
    </Swiper>
  )
}

export default SwiperRating