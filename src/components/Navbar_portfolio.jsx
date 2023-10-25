import React from 'react'
import { Link, NavLink } from 'react-router-dom';
const Navbar_portfolio = () => {
  return (
    <div className='w-screen h-24  flex  flex-col md:flex-row items-center my-4 justify-center  '>
        <div className='my-8'>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/all' >All</NavLink>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/retail' >Retail</NavLink>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/hospitality' >Hospitality</NavLink>
        
        </div>
        <div>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/healthcare' >Healthcare</NavLink>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/banner' >Banner & Hoarding</NavLink>
        <NavLink className='rounded-3xl lg:text-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-black px-2 lg:px-6 py-2 text-center mx-1 lg:mx-4'  to='/portfolio/automotive' >Automotive</NavLink>
        </div>
       
    </div>
  )
}

export default Navbar_portfolio