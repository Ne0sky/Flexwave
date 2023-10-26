import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';


let Links=[
  {name:'Home', link:'/'},
  // {name:'Products', link:'/products'},
  {name:'Portfolio', link:'/portfolio/automotive'},
  {name:'Contact', link:'/contact'},
]

const Navbar = () => {
 const [header, setHeader] = useState(false);
  
 useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  })
 })
    

  

  return (
    <header className={`backdrop-filter backdrop-blur-xl bg-[#ffffff] py-6 bg-gradient-to-r from-white to-transparent shadow-xl font-primary  fixed top-0 left-0 px-8 z-50 w-screen  border-zinc-900 flex justify-between transition-all duration-300`}>

      
      {/* logo */}
      <h1 className={` text-black text-xl  md:text-2xl lg:text-3xl font-primary font-bold pl-6`}>
        <a href='/'>
          <img className='w-[150px] h-auto' src="assets/Logo.jpg" alt="logo" />
        </a>
      </h1>

      {/* nav - initially hidden, shown on desktop */}
      
      <ul className='hidden md:flex md:items-center pr-16 uppercase min-h-full '>
        {
          Links.map((link)=>(
            <li key={link.name} className={'text-black text-xl px-4 font-semibold   hover:text-blue-800 hover:scale-110 transition-all ease-in-out duration-300 '}><Link to={link.link}>{link.name}</Link></li>
          ))
        }
      </ul>
     
      

      {/* nav menu button - shown by default, hidden on desktop */}

      <MobileNav/>
      
    </header>
  );
};

export default Navbar;

