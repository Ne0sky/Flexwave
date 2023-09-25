import React, { useState } from 'react'
import Navbar_portfolio from '../components/Navbar_portfolio';
import Banner_half from '../components/Banner_half';
import AutomotiveSrc from '../Data/Automotive';
import ScrollToTop from '../Utils/ScrolltoTop';

const Portfolio_Healthcare = () => {



    const[file, setFile] = useState(null)
    return (
      <div className='font-primary overflow-x-hidden '>
        <Banner_half/>
        <Navbar_portfolio/>
        <div className="h-[1px] w-3/4 rounded-xl mx-auto bg-zinc-900 hidden md:flex mb-5"></div>
          <div className='w-full columns-1 md:columns-2 lg:columns-3 space-y-5 gap-5 p-5 '>
          {AutomotiveSrc.map((data, index)=>{
              return  <img onClick={()=>setFile(data)} key={index} className='rounded-xl object-cover w-full cursor-pointer h-auto shadow-lg' src={data.path} alt="Porfolio_img" />
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
  
  export default Portfolio_Healthcare