import React from 'react'
import SwiperRating from '../components/SwiperRating'

const Testimonials = () => {
  return (
    <div className='py-8 px-2'>
        <p className='font-secondary text-center pt-8 text-xl uppercase'>Testimonials</p>
      <h2 className='text-center pt-2  font-semibold text-3xl md:text-4xl uppercase'>WHAT OUR CLIENTS ARE SAYING</h2>
      <p className='bg-rose-600 w-44 h-1 mb-16 mx-auto '></p>
      <SwiperRating/>
    </div>
  )
}

export default Testimonials