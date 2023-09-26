import React from 'react'
import SwiperRating from '../components/SwiperRating'
import {motion} from 'framer-motion';
const Testimonials = () => {
  const fadeinAnimation ={
    initial:{
      opacity:0,
      y:100
    },
    animate: (index)=>({
      opacity:1,
      y:0,
      transition:{
        delay:2,
        duration:1
        
      }
    })
  }
  return (
    <div className='py-8 px-2'>
        <p className='font-secondary text-center pt-8 text-xl uppercase'>Testimonials</p>
      <h2 className='text-center pt-2  font-semibold text-3xl md:text-4xl uppercase'>WHAT OUR CLIENTS ARE SAYING</h2>
      <p className='bg-rose-600 w-44 h-1 mb-16 mx-auto '></p>
      <motion.div
      variants={fadeinAnimation}
      initial="initial"
      whileInView="animate"
      
      viewport={
      {once:true}
      }
      
      ><SwiperRating/>
      </motion.div>
    </div>
  )
}

export default Testimonials