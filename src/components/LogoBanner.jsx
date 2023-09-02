import React from 'react'
import Slider from 'react-infinite-logo-slider'

const LogoBanner = () => {
  return (
    <div  className='py-8'>
    <Slider
    width="200px"
    duration={40}
    pauseOnHover={true}
    blurBorders={true}
    blurBoderColor={'#fff'}
   
>
    <Slider.Slide>
        <img src="/assets/Logos/Bhawani.png" alt="any" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Emami.png" alt="any2" className='w' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Essar.png" alt="any3" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Ethnotel.png" alt="any3" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Margo.png" alt="any3" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Sonalika.png" alt="any3" className='w-36' />
    </Slider.Slide>
    
</Slider>
</div>
  )
}

export default LogoBanner