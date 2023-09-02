import React from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import Contactbtn from '../components/Contactbtn';
import ServiceCard from '../components/ServiceCard';
import About from '../sections/About';
import Services from '../sections/Services';
import Banner from '../sections/Banner';
import Projects from '../sections/Projects';
import Clients from '../sections/Clients';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';


const Home = () => {
  return (
    <div className="home font-primary">
    <Banner/>
    <Services/>
    <About/>
    <Projects/>
    <Clients/>
    <Testimonials/>
    <FAQ/>
    </div>
  );
};

export default Home;
