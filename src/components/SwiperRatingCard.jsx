import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const SwiperRatingCard = ({name, position, quote, rating}) => {

   
        const [isGrabbing, setIsGrabbing] = useState(false);
      
        const handleMouseDown = () => {
          setIsGrabbing(true);
        };
      
        const handleMouseUp = () => {
          setIsGrabbing(false);
        };

  return (
    <div className={`w-3/4 rounded mx-auto text-center ${isGrabbing ? 'cursor-grabbing' : 'cursor-default'}`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <p className='font-secondary font-medium text-2xl text-rose-600'>{name}</p>
        <p className='font-secondary font-semibold pb-2'>{position}</p>
        <div className='flex justify-center items-center space-x-1 mb-4'>
        {Array.from({ length: rating }).map((_, index) => (
          <FaStar key={index} className='text-yellow-500 text-xl' />
        ))}
      </div>
        <p className='font-semibold py-2'>{quote}</p>
    </div>
  )
}

export default SwiperRatingCard