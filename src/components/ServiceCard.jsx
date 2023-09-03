import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center text-center w-[350px] px-4 py-2 '>
        <img className='w-[20rem] md:w-[20rem] md:h-[20rem]' src={props.src}/>
        <h3 className='font-primary text-xl font-bold pt-4'>{props.title}</h3>
        <p className='font-secondary text-md font-medium px-0 lg:px-8 w-full'>{props.desc}</p>
    </div>
  )
}

export default ServiceCard