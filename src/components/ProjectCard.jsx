import React from 'react'
import { HiExternalLink } from 'react-icons/hi';
import { VscLinkExternal } from "react-icons/vsc";
const ProjectCard = ({title,src}) => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-[100%] h-full  cursor-pointer'>
    <div className='relative z-0 overflow-hidden  min-w-[100%]'>
      <div className="hover:scale-125 transition-all ease-in-out duration-500  ">
        <img className='w-full object-cover ' src={src} alt="Image"/>
      </div>
      <h3 className='font-primary text-2xl uppercase pt-4 flex items-center absolute bottom-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white'>{title} <VscLinkExternal size={24} className="    mx-2  text-white" /></h3>
      <div className="h-0.5 w-1/3 text-center bg-rose-600 absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 "></div>
    </div>
  </div>
  

  )
}

export default ProjectCard