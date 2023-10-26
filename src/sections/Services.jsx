import React from 'react'
import ServiceCard from '../components/ServiceCard'
import {motion} from 'framer-motion';
import Transition from '../Transition'
const Services = () => {


  const data=[
    {
      desc:"Ensure quality and consistency across national locations.",
      title:"Multi-Site Branding",
      src:"/assets/multi-site.jpeg"
    },
    {
      desc:"Providing you with high specification interior signage solutions.",
      title:"Inshop Branding Branding",
      src:"/assets/inshop.jpg"
    },
    {
      desc:"Design, manufacture and installation of wayfinding signage.",
      title:"Wayfinder Signage",
      src:"/assets/directional.jpg"
    },

  ]


  const fadeinAnimation ={
    initial:{
      opacity:0,
      y:100
    },
    animate: (index)=>({
      opacity:1,
      y:0,
      transition:{
        delay:0.1*index,
        
      }
    })
  }
  return (
    <div
    >
        
      {/* Services Section */}
      <p className='font-secondary text-center pt-8 text-xl uppercase'>What we do</p>
      <h2 className='text-center pt-2 font-semibold text-2xl md:text-4xl uppercase'>Our Services</h2>
      <p className='bg-rose-600 w-36 h-1  mx-auto '></p>

      <section 
      
      className="services flex flex-col w-screen md:flex-row justify-center items-center md:items-start py-16  overflow-hidden lg:w-3/4 mx-auto">
        {
         data.map((data, index)=>{
          return <motion.div
          variants={fadeinAnimation}
          initial="initial"
          whileInView="animate"
          viewport={
          {once:true}
          }
          custom={index}
          index={index}>
          <ServiceCard
         title={data.title}
         desc={data.desc}
         src={data.src}/>
          </motion.div>
        })
        }
        
        
      </section>
    </div>
  )
}

export default Services