import React from 'react'

import { HiChevronDoubleDown } from 'react-icons/hi';
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';
import Contactbtn_bl from '../components/Contactbtn_bl';
import { BiLink, BiRightArrowCircle, BiLogoWhatsapp, BiMailSend, BiLocationPlus } from "react-icons/bi";
const Banner = () => {
  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card"),{
      max:5,
      speed:10,
      glare:true,
      'max-glare':0.50
    })
  })
  return (
    <div>
        <section className="banner bg-gradient from-zinc-100 to-white pt-24  w-full py-8 bg-gradient-to-b  flex flex-col lg:flex-row items-center bg-no-repeat bg-cover bg-center bg-fixed relative ">
        
        <div className='hidden  h-full lg:w-1/2 md:flex items-center justify-center'>
          <img className='card w-[80%]' src="assets/background-main.png" alt="aegaeg" />
        </div>
      
      
        
        <div className="text-content h-full justify-center flex flex-col  z-20  ">
          <div className='flex items-center'>
          <div className="h-[4rem] w-[0.2rem] md:h-[4rem] xl:h-[8rem] md:w-[0.5rem] bg-rose-600 mr-4 "></div>
          <div
           
           className="text-3xl md:text-4xl xl:text-6xl font-bold ">
            <p>Make your Brand</p>
            <div className='relative'>
              <p>Stand Out</p>
            {/* <img className='absolute top-0 left-0 w-3/4' src="assets/circle.png" alt="" /> */}
            </div>
          </div>
          </div>
          <div
          
           className=" font-secondary text-md md:text-xl xl:text-2xl w-[60vw] md:w-[50vw] lg:w-[30vw] pl-4 pt-8">
            <p>Make your organization instantly recognizable with unique signage solutions and custom fabrication, all supported by Flexwave’s industry-leading project management.</p>
            <Contactbtn_bl/>
          </div>
        </div>
        <div className='hidden  text-xl md:text-2xl pt-8 z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-60 lg:flex flex-col items-center justify-center'><p>Scroll Down</p> <HiChevronDoubleDown className='pt-4 text-4xl md:text-6xl text-zinc-900 animate-bounce'/></div>
        
      </section>
    </div>
  )
}

export default Banner