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
        <img src="/assets/Logos/Bhawani.png" alt="Bhawani Group" className='w-36' />
    </Slider.Slide>
    
    <Slider.Slide>
        <img src="/assets/Logos/Essar.png" alt="Essar Oil" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Ethnotel.png" alt="ethnotel" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/kinley.png" alt="kinley" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/Sonalika.png" alt="sonalika" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/meridian.jpg" alt="meridian group" className='w-36' />
    </Slider.Slide>
    
    <Slider.Slide>
        <img src="/assets/Logos/cocacola.png" alt="coca cola" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/ID & BG Hospital.png" alt="ID and BG Hospital" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/eureka.PNG" alt="eureka" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/kinnova.jpg" alt="kinnova" className='w-36' />
    </Slider.Slide>
    <Slider.Slide>
        <img src="/assets/Logos/econest.png" alt="econest" className='w-36' />
    </Slider.Slide>
    
</Slider>
</div>
  )
}

export default LogoBanner