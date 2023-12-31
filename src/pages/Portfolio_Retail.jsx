import React, { useState } from 'react'
import Navbar_portfolio from '../components/Navbar_portfolio';
import Banner_half from '../components/Banner_half';
import { BiLink, BiRightArrowCircle, BiLogoWhatsapp, BiMailSend, BiLocationPlus } from "react-icons/bi";
import ScrollToTop from '../Utils/ScrolltoTop';
import RetailData from '../Data/RetailData';
const Portfolio_Retail = () => {



    const[file, setFile] = useState(null)
    return (
      <div className='font-primary overflow-x-hidden '>
        <Banner_half title='Retail'/>
        <Navbar_portfolio/>
        <div className="h-[1px] w-3/4 rounded-xl mx-auto bg-zinc-900 hidden md:flex mb-5"></div>
          <div className='w-full columns-1 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5  '>
          {RetailData.map((data, index)=>{
              return <div key={index}  className='overflow-hidden rounded-xl p-8  shadow-xl shadow-zinc-400'>
              <img onClick={()=>setFile(data)} key={index} className='rounded-xl overflow-hidden object-cover w-full cursor-pointer h-auto shadow-lg' src={data.path} alt="Porfolio_img" />
              <div className='flex w-full justify-between pt-4'>
              <div>
              <p className='text-xl font-bold'>{data.title}</p>
              <p>{data.desc}</p>
              </div>

              <div>
              <p className='font-semibold flex items-center '><BiLocationPlus className='mx-2'/>{data.location}</p>
              
              </div>
              </div>

              </div>
          })}
          </div>
          <div className={'popup-media transition-all' } style={{display: file?'block':'none'}}>
            <span onClick={()=>setFile(null)} className='absolute cursor-pointer right-0 text-white text-6xl'>&times;</span>
            {file && <img src={file.path}/>}
          </div>
          <ScrollToTop/>
      </div>
    )
  }
  
  export default Portfolio_Retail