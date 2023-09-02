import React, { useState } from 'react'
import AccordionData from '../Data/AccordionData'
import AccordionItem from '../components/AccordionItem'
const FAQ = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) =>{
        if(open==index) return setOpen(null);
        else
        setOpen(index)
    }
  return (
    <div className='grid place-items-center px-8'>
        <p className='font-secondary text-center pt-8 text-xl uppercase'>COMMON QUESTIONS OUR CLIENTS ASK</p>
      <h2 className='text-center pt-2  font-semibold text-2xl md:text-4xl uppercase'>FAQs.</h2>
      <p className='bg-rose-600 w-44 h-1 mb-16 mx-auto '></p>
        {AccordionData.map((data,index)=>{
            return <AccordionItem key={index}  
            open={index==open} 
            title={data.title} 
            desc={data.desc} 
            toggle={()=>toggle(index)}/>
        })}
    </div>
  )
}

export default FAQ