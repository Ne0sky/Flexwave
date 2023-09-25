import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link, NavLink } from 'react-router-dom';
const Projects = () => {
  return (
    <div className='py-8'>
        <p className='font-secondary text-center pt-8 text-xl uppercase'>building brands since 1998</p>
      <h2 className='text-center pt-2  font-semibold text-2xl md:text-4xl uppercase'>Selected Projects</h2>
      <p className='bg-rose-600 w-44 h-1 mb-16 mx-auto '></p>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8'>

        <NavLink to='/portfolio/all'><ProjectCard title={'All projects'} src={`/assets/Rectangle 14.png`}/></NavLink>
        <NavLink to='/portfolio/hospitality'><ProjectCard title={'Hospitality'} src={`/assets/Rectangle 15.png`}/></NavLink>
        <NavLink to='/portfolio/automotive'><ProjectCard title={'Automotive'} src={`/assets/Rectangle 16.png`}/></NavLink>
        <NavLink to='/portfolio/architectural'><ProjectCard title={'Architectural'} src={`/assets/Rectangle 17.png`}/></NavLink>
        <NavLink to='/portfolio/healthcare'><ProjectCard title={'Healthcare'} src={`/assets/Rectangle 18.png`}/></NavLink>
        <NavLink to='/portfolio/retail'><ProjectCard title={'Retail'} src={`/assets/Rectangle 19.png`}/></NavLink>

      </section>
    </div>
  )
}

export default Projects