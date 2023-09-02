import React from 'react'
import ServiceCard from '../components/ServiceCard'
const Services = () => {
  return (
    <div>
        
      {/* Services Section */}
      <p className='font-secondary text-center pt-8 text-xl uppercase'>What we do</p>
      <h2 className='text-center pt-2 font-semibold text-2xl md:text-4xl uppercase'>Our Services</h2>
      <p className='bg-rose-600 w-36 h-1  mx-auto '></p>

      <section className="services flex flex-col md:flex-row justify-around items-center md:items-start py-16 w-screen overflow-x-hidden lg:w-3/4 mx-auto">
        <ServiceCard title='Multi-Site Branding' desc='Ensure quality and consistency across national locations.' src={`/assets/multi-site.png`}/>
        <ServiceCard title='Architectural Branding' desc='Providing you with high specification exterior and interior architectural signage solutions' src={`/assets/architectural.png`}/>
        <ServiceCard title='Wayfinder Signage' desc='Design, manufacture and installation of wayfinding signage.' src={`/assets/directional.png`}/>
      </section>
    </div>
  )
}

export default Services