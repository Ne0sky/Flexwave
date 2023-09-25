import React from 'react'
import Contactbtn from '../components/Contactbtn'
const Banner_half = ({title}) => {
  return (
    <section className="banner   w-full h-[60vh] bg-automotive flex  items-center bg-no-repeat bg-cover bg-center bg-fixed relative ">
        <div className="background-gradient absolute top-0 left-0 bg-gradient-to-r from-slate-900 to-[#0000003f] z-10 w-full h-full "></div>
        
        <div className="text-content h-full justify-center xl:justify-around w-full items-start px-8 xl:items-center flex flex-col xl:flex-row  z-20  ">
          <div className='flex items-center'>
          <div className="h-[4rem] w-[0.2rem] md:h-[4rem] xl:h-[10rem] rounded-xl md:w-[0.5rem] bg-rose-600 mr-4 "></div>
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white">
            <p>Our Work</p>
            <p>{title} : Our Business <br/> Cases</p>
          </h2>
          </div>
         <div className=' flex items-end xl:py-16'>
          <Contactbtn/>
          
          </div>
          
        </div>
        
      </section>
  )
}

export default Banner_half