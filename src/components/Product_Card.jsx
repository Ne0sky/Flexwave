import React from 'react'

const Product_Card = ({title, desc}) => {
  return (
    <div>
        <div className='w-full h-[500px] shadow-xl bg-white border-black rounded-xl bg-cover flex flex-col gap-8 items-center  p-8'>
        <img className='rounded-xl' src="/assets/Rectangle-17.avif" alt="acp" />
        <div>
          <p className='text-xl font-bold'>{title}</p>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Product_Card