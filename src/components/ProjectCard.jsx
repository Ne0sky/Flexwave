import React from 'react'
import { HiExternalLink } from 'react-icons/hi';
import { VscLinkExternal } from "react-icons/vsc";
const ProjectCard = ({title,src}) => {
  return (
    <div className='flex h-full flex-col justify-center items-center text-center w-[100%]  cursor-pointer'>
    <div className='relative z-0  overflow-hidden  min-w-[100%] '>
      
      <div className="hover:scale-125 transition-all ease-in-out duration-500 ">
        <img className='w-full object-cover object-center' src={src} alt="Image"/>
      </div>
      
      <h3 className='font-primary text-2xl shadow-md bg-[#ffffffe3] uppercase pt-4 flex items-center  absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded  w-50  px-4 py-2  backdrop-filter backdrop-blur-sm w-50   text-black'>{title} <VscLinkExternal size={24} className="    mx-2  text-black" /></h3>
      
    </div>
  </div>
  

  )
}

export default ProjectCard