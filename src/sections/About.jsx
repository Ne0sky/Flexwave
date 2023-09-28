import React from 'react'
import Contactbtn from '../components/Contactbtn'
import CountUp, { useCountUp } from 'react-countup';
const About = () => {
 
  return (
    <div className='py-8'>
        {/* About Section */}
      <p className='font-secondary text-center pt-8 text-xl uppercase'>Who we are</p>
      <h2 className='text-center pt-2 font-semibold text-2xl md:text-4xl uppercase'>About Us</h2>
      <p className='bg-rose-600 w-36 h-1  mx-auto mb-16'></p>
      <section className="About flex flex-col md:flex-row  justify-around  p-8 md:px-20 bg-gradient-to-b from-zinc-800 to-black ">
      <div className='w-full md:w-1/3 pt-16'>

        <div className='font-secondary text-white'>
          <p className='uppercase text-white md:text-xl pb-4'>We are Flexwave</p>
          <p className='text-xl md:text-2xl' >Signage and Fabrication Solutions 
              Delivered with Peace of Mind.</p>
          <img className='py-8' src="/assets/map.png" alt="map image" />
          <p className='font-primary md:w-3/4 md:text-xl'>A map displaying the reach of our satisfied clients, over <span className='font-semibold  text-2xl'>25</span> cities over <span className='font-semibold  text-2xl'>3</span> states of India, namely West Bengal, Assam and Tripura.</p>
        </div>
        

      </div>

      <div className='w-full  flex flex-col items-start justify-between pb-2 md:w-1/3'>
      <p className='text-white md:text-xl py-16'>
      Flexwave provides turnkey services to be a total solutions provider. We bring over 20 years of experience to every project, providing you with the national signage and fabrication partner you need to make your vision a reality. Our commitment to excellence is second to none and it shows in our level of service, product quality, easy-to-work with approach, and comprehensive project management.
      </p>

      <div className='flex items-center py-4'>

      <div className='text-rose-600'>
      <p className='text-6xl font-medium'><CountUp duration={3.5} end={20} enableScrollSpy scrollSpyOnce />+</p>
      <p className='text-2xl'>years of business</p>
      </div>

      <p className='bg-rose-600 w-0.5 h-16  mx-8'></p>

      <div className='text-rose-600'>
      <p className='text-6xl font-medium'><CountUp duration={3.5} end={150} enableScrollSpy scrollSpyOnce />+</p>
      <p className='text-2xl'>clients</p>
      </div>

      </div>
      <div className='py-8'>
      <Contactbtn />
      </div>
      </div>
      </section>
    </div>
  )
}

export default About