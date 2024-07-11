import React from 'react';
import Preheader from '../components/Preheeader'; // Corregido el nombre del componente Preheader
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services'; // Corregida la ruta de Services
import Testimonials from '../components/Testimonials';
import Forms from '../components/Forms';
import Pie from '../components/Pie'; // Corregida la ruta de Pie
import Metodologia from '../components/metodologia';


const LandingPage = () => {
  return (
    <div>
      <Header />
      <Preheader />
      <Hero />
      <Metodologia/>
      <Services />
      <Forms />
      <Testimonials />
      <Pie />
    </div>
  );
};

export default LandingPage;

