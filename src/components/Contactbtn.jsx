import React from 'react'
import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi';
const Contactbtn = () => {
  return (
    <Link to='/contact' className="border w-60 border-white text-white text-md md:text-xl xl:text-2xl px-8 py-4  mt-8 flex justify-center items-center hover:bg-white hover:text-black font-primary transition-all">Contact Us <HiExternalLink size={20} className="ml-4" /></Link>
  )
}

export default Contactbtn