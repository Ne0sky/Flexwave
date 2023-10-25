import React, { useEffect, useState } from 'react';
import {IoMdClose} from 'react-icons/io';
import {CgMenuRight} from 'react-icons/cg';

import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';
let Links=[
    {name:'HOME', link:'/'},
    // {name:'PRODUCTS', link:'/products'},
    {name:'PORFOLIO', link:'/portfolio/automotive'},
    {name:'CONTACT', link:'/contact'},
  ]

const menuVariants = {
    hidden:{
        x:'100%'
    },
    show:{
        x:0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.9],
        },
    },
};

const MobileNav = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [header, setHeader] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
          window.scrollY > 50 ? setHeader(true) : setHeader(false);
        })
       })
    
       
  return (
    <nav className=' md:hidden font-primary'>
        <div onClick={()=>setOpenMenu(true)} className={` text-black text-3xl cursor-pointer`}>
           <CgMenuRight/>
        </div>

        {/* Menu */}
        <motion.div 
        variants={menuVariants}
        initial='hidden'
        animate={openMenu ? 'show': ''}
        className='bg-white shadow-2xl w-full absolute
        top-0 right-0 max-w-xs h-screen z-20'>
            <div onClick={()=>{setOpenMenu(false)}} className='text-4xl absolute z-30 left-4 top-14
            text-black cursor-pointer'><IoMdClose/></div>
            {/* menu list */}
            <ul className='h-full flex flex-col justify-center
            items-center gap-y-8 text-black font-primary first-letter:first
            font-bold text-2xl'>
                {Links.map((link)=>(
                    <li onClick={()=>{setOpenMenu(false)}} key={link.name}><Link to={link.link}>{link.name}</Link></li>
                ))}
            </ul>
        </motion.div>
    </nav>
  )
}

export default MobileNav