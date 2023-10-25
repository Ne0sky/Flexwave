import React from 'react'
import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi';
const Contactbtn_bl = () => {
  return (
    <Link to='/contact' className="border h-20 rounded backdrop-filter backdrop-blur-sm w-50 border-black text-black text-md md:text-xl xl:text-2xl px-8 py-4  mt-8 flex justify-center items-center hover:bg-black hover:text-white font-primary transition-all">Contact Us <HiExternalLink size={20} className="ml-4" /></Link>
  )
}

export default Contactbtn_bl