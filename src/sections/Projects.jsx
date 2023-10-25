import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
const Projects = () => {

  const data=[
    {
      to:"/portfolio/all",
      title:"All projects",
      src:"/assets/Rectangle-14.jpg"
    },
    {
      to:"/portfolio/hospitality",
      title:"Hospitality",
      src:"/assets/Rectangle-15.jpg"
    },
    {
      to:"/portfolio/automotive",
      title:"Automotive",
      src:"/assets/Rectangle-16.avif"
    },
    {
      to:"/portfolio/banner",
      title:"Banners",
      src:"/assets/Rectangle-17.jpg"
    },
    {
      to:"/portfolio/healthcare",
      title:"Healthcare",
      src:"/assets/Rectangle-18.jpg"
    },
    {
      to:"/portfolio/retail",
      title:"Retail",
      src:"/assets/Rectangle-19.jpg"
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
        delay:0.075*index,
        
      }
    })
  }
  return (
    <div className='py-8'>
        <p className='font-secondary text-center pt-8 text-xl uppercase'>building brands since 1998</p>
      <h2 className='text-center pt-2  font-semibold text-2xl md:text-4xl uppercase'>Selected Projects</h2>
      <p className='bg-rose-600 w-44 h-1 mb-16 mx-auto '></p>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8'>
        {
          data.map((data, index)=>{
            return <motion.div
            className='h-[450px]'
            variants={fadeinAnimation}
            initial="initial"
            whileInView="animate"
            viewport={
            {once:true}
            }
            custom={index}
            index={index}>
            <NavLink
            className={""}
           to={data.to}><ProjectCard title={data.title} src={data.src}/></NavLink>
            </motion.div>
          })
        }
        

      </section>
    </div>
  )
}

export default Projects