import React from 'react'
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"
import {Collapse} from 'react-collapse';
const AccordionItem = ({open, toggle, title, desc}) => {
  return (
    <div className='pt-8 w-full  '>
        <div className='py-[25px]  flex flex-col justify-between items-start cursor-pointer border-b border-black' onClick={toggle}>
            <p className='text-xl font-semibold font-secondary flex justify-between w-full items-center'>{title} {open? <AiFillMinusCircle size={30} /> : <AiFillPlusCircle size={30}/>  }</p>

            <Collapse isOpened={open}>
                <div className='px-0 py-2 font-medium'>{desc}</div>
            </Collapse>

        </div>
    </div>
  )
}

export default AccordionItem