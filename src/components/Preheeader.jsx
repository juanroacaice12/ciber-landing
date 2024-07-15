// PreHeader.jsx
import React from 'react';

const PreHeader = () => {

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-700 py-8">
      <div className="container mx-auto text-center">
        <img src="src/assets/logito.png" alt="FixLat Logo" className="mx-auto mb-6 h-32" />
        <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
          FixLat Security
        </h1>
        <p className="text-3xl text-white mb-6 leading-relaxed" style={{ opacity: 0.9 }}>
          Mejora y simplifica tu seguridad cibernética y cumplimiento
        </p>
        <div className="mt-8">
          <button
            className="bg-white text-black px-6 py-3 rounded-full shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            onClick={scrollToServices}
          >
            Conoce nuestros servicios
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
