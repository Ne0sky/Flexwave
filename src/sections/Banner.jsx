import React from 'react'
import Contactbtn from '../components/Contactbtn'
import { HiChevronDoubleDown } from 'react-icons/hi';
import {motion} from 'framer-motion';
import Transition from '../Transition'
const Banner = () => {
  return (
    <div>
        <section className="banner w-full h-[100vh] bg-hero flex  items-center bg-no-repeat bg-cover bg-center bg-fixed relative ">
        <div className="background-gradient absolute top-0 left-0 bg-gradient-to-r from-slate-900 to-transparent z-10 w-full h-full "></div>
        
        <div className="text-content h-full justify-center flex flex-col  z-20 pl-6 ">
          <div className='flex items-center'>
          <div className="h-[4rem] w-[0.2rem] md:h-[4rem] xl:h-[8rem] md:w-[0.5rem] bg-rose-600 mr-4 "></div>
          <motion.div
           initial={{ opacity: 0,y:'-50%' }} 
           animate={{ opacity: 1, y:0 }}
           exit={{ opacity: 0 , y:'-50%'}}
           transition={Transition}
           className="text-3xl md:text-4xl xl:text-6xl font-bold text-white">
            <p>Make your Brand</p>
            <p>Stand Out</p>
          </motion.div>
          </div>
          <motion.div
          initial={{ opacity: 0,y:'-50%' }} 
          animate={{ opacity: 1, y:0 }}
          exit={{ opacity: 0 , y:'-50%'}}
          transition={Transition}
          duration={4}
           className="text-white font-secondary text-md md:text-xl xl:text-2xl w-[60vw] md:w-[50vw] lg:w-[30vw] pl-4 pt-8">
            <p>Make your organization instantly recognizable with unique signage solutions and custom fabrication, all supported by Flexwave’s industry-leading project management.</p>
            <Contactbtn/>
          </motion.div>
        </div>
        <div className='text-white text-xl md:text-2xl z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-60 flex flex-col items-center justify-center'><p>Scroll Down</p> <HiChevronDoubleDown className='pt-4 text-4xl md:text-6xl text-zinc-300 animate-bounce'/></div>
      </section>
    </div>
  )
}

export default Banner