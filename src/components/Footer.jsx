import React from 'react';
import { BiLink, BiRightArrowCircle, BiLogoWhatsapp, BiMailSend, BiLocationPlus } from "react-icons/bi";
const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-24 mt-16 flex flex-col font-primary md:flex-row relative items-start justify-center gap-16 px-8">
      <div className='flex flex-col justify-center items-start w-full md:w-1/4'>
        <h3 className='font-bold text-xl text-rose-600 uppercase pb-4'>Flexwave</h3>
        <p>Flexwave provides turnkey services to be a total solutions provider. We bring over 20 years of experience to every project, providing you with the national signage and fabrication partner you need to make your vision a reality. </p>
      </div>
      
      <div className='flex flex-col justify-center items-start'>
        <h3 className='font-bold text-xl text-rose-600 pb-4 flex items-center gap-2 w-full uppercase '>Useful Links <BiLink/></h3>
        <ul>
          <li><a className='flex items-center py-2 gap-2' href="/"><BiRightArrowCircle color='#FF2741' size={20}/>Home</a></li>
          <li><a  className='flex items-center py-2 gap-2' href="/"><BiRightArrowCircle color='#FF2741' size={20}/>Products</a></li>
          <li><a  className='flex items-center py-2 gap-2'href="/"><BiRightArrowCircle color='#FF2741' size={20}/>Portfolio</a></li>
          <li><a  className='flex items-center py-2 gap-2'href="/"><BiRightArrowCircle color='#FF2741' size={20}/>Contact</a></li>
        </ul>
      </div>
      
      <div className='flex flex-col justify-center items-start'>
        <h3 className='font-bold text-xl pb-4 text-rose-600 flex items-center  gap-2 w-full '>CONTACT<BiLink/></h3>
        
          <p className='flex items-center gap-2 py-2' ><BiLogoWhatsapp color='#FF2741' size={20}/>+91 9748534945</p>
          <p  className='flex items-center gap-2 py-2' ><BiMailSend color='#FF2741' size={20}/>flexwave17@gmail.com</p>
      
      </div>
      
      <div className='flex flex-col justify-center items-start'>
        <h3 className='font-bold text-xl text-rose-600 flex items-center  gap-2 w-full '>VISIT<BiLink/></h3>
        
          <p className='flex items-center gap-2 py-2' ><BiLocationPlus color='#FF2741' size={20}/> 100/2 Bhagabati
          Park, Kolkata 700074</p>
         
      </div>

      <div className='absolute bottom-4 right-4 text-zinc-300'>
        <p>All rights reserved @Flexwave</p>
      </div>
      
    </footer>
  );
};

export default Footer;