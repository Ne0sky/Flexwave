import React from 'react'
import Contactbtn from '../components/Contactbtn'
import Product_Card from "../components/Product_Card"
const Products = () => {
  return (
    <div className='font-primary '>
      <section className="banner mt-20  w-full h-[50vh] bg-automotive flex items-center bg-no-repeat bg-cover bg-center bg-fixed relative ">
        <div className="background-gradient absolute top-0 left-0 bg-gradient-to-r from-slate-900 to-[#0000003f] z-10 w-full h-full "></div>
        
        <div className="text-content h-full justify-center xl:justify-around w-full items-start px-8 xl:items-center flex flex-col xl:flex-row  z-20  ">
          <div className='flex items-center'>
          <div className="h-[4rem] w-[0.2rem] md:h-[4rem] xl:h-[8rem] rounded-xl md:w-[0.5rem] bg-rose-600 mr-4 "></div>
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white">
            <p>Our Products</p>
            <p className='text-xl font-medium'>Working hand in hand with brands to write<br/> a story that is unique to them.</p>
          </h2>
          </div>
         <div className=' flex items-end xl:py-16'>
          <Contactbtn/>
          
          </div>
          
        </div>
        
      </section>
      <div className='flex md:w-[80%] items-center justify-center mx-auto bg-slate-300 rounded-b-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full items-center justify-center gap-8 p-8'>
  <div className='flex items-center justify-center'>
    <Product_Card title={"ACP & LED Signage"} desc={"Brilliant, Durable, Eye-catching Signage Solutions."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"Glow Sign Board"} desc={"Illuminating Your Brand's Presence."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"Inshop Branding"} desc={"Transforming Spaces into Experiences."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"ACP Cladding"} desc={" Elevate Your Structures with Style."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"Non-lit Banner"} desc={" Classic Design, Lasting Impressions"} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"LED Signage (P-2,P-4,P-6)"} desc={"Captivating Messages Day and Night."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"Wayfinder Signage"} desc={"Precision-guided Navigational Excellence. Redefining the Way Forward."} />
  </div>
  <div className='flex items-center justify-center'>
    <Product_Card title={"Outdoor(OOH) Advertizing"} desc={"Outdoor Signage Solutions. Where Visibility Meets Impact."} />
  </div>
</div>
</div>

    </div>
  )
}

export default Products