import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';


let Links=[
  {name:'HOME', link:'/'},
  {name:'PRODUCTS', link:'/products'},
  {name:'PORFOLIO', link:'/portfolio'},
  {name:'CONTACT', link:'/contact'},
]

const Navbar = () => {
 const [header, setHeader] = useState(false);
  
 useEffect(()=>{
  window.addEventListener('scroll', ()=>{
    window.scrollY > 50 ? setHeader(true) : setHeader(false);
  })
 })
    

  

  return (
    <header className={`${header ? 'backdrop-filter backdrop-blur-xl bg-[#f9f9f9] py-6  shadow-xl' : 'bg-gradient-to-b from-slate-900 to-transparent py-4 '}   fixed top-0 left-0 px-8 z-50 w-screen  border-zinc-900 flex justify-between transition-all duration-300`}>

      
      {/* logo */}
      <h1 className={` ${header ? 'text-black':'text-white'} text-xl  md:text-2xl lg:text-3xl font-primary font-bold pl-6`}>
        <a href='/'>Flexwave.</a>
      </h1>

      {/* nav - initially hidden, shown on desktop */}
      
      <ul className='hidden md:flex md:items-center pr-16  '>
        {
          Links.map((link)=>(
            <li key={link.name} className={`${header ? 'text-black':'text-white'} text-xl px-4  h-[100%]  hover:scale-110 transition-all ease-in-out duration-300 `}><Link to={link.link}>{link.name}</Link></li>
          ))
        }
      </ul>
     
      

      {/* nav menu button - shown by default, hidden on desktop */}

      <MobileNav/>
      
    </header>
  );
};

export default Navbar;

