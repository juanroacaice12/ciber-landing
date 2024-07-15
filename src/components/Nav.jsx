// Header.jsx
import React, { useState } from 'react';
import logo from '../assets/logito.png'; // Asegúrate de que la ruta sea correcta
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Nav({ setMobileMenuOpen }) {
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setShowServicesMenu(false); // Cerrar el menú de servicios al hacer clic en un servicio
    }
  };

  const redirectToWhatsApp = () => {
    window.open('https://wa.link/x5p8n6', '_blank'); // Abre enlace de WhatsApp en una nueva pestaña
  };

  const scrollToContact = () => {
    scrollToSection('background-section'); // Reemplaza 'background-section' con el ID de tu sección 'Background'
  };

  return (
    <nav className="bg-black text-white p-2 rounded-b-lg fixed top-0 left-0 w-full z-20 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo cursor-pointer" onClick={scrollToTop}>
          <img src={logo} alt="FixLat Logo" className="h-16" /> {/* Aumenta el tamaño del logo */}
        </div>
        <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        </div>
        <ul className="hidden lg:flex space-x-4">
          <li className="cursor-pointer" onClick={scrollToTop}>Inicio</li>
          <li className="relative cursor-pointer flex items-center" onClick={toggleServicesMenu}>
            Servicios
            <svg
              className={`ml-2 transform transition-transform ${showServicesMenu ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.23a.75.75 0 011.06 0L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
            {showServicesMenu && (
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-black to-gray-900 shadow-lg py-2 z-30 overflow-y-auto rounded-b-lg"
                style={{ width: '900%' }}
              >
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  <div
                    className="p-4 bg-black shadow-md rounded text-white cursor-pointer"
                    onClick={() => scrollToSection('ciberseguridad-section')}
                  >
                    <div className="font-bold text-xl mb-2">Ciberseguridad</div>
                    <p className="text-size-small text-gray-300">
                      Para proteger de manera proactiva todos tus sistemas.
                    </p>
                  </div>
                  <div
                    className="p-4 bg-black shadow-md rounded text-white cursor-pointer"
                    onClick={() => scrollToSection('cumplimiento-section')}
                  >
                    <div className="font-bold text-xl mb-2">Cumplimiento</div>
                    <p className="text-size-small text-gray-300">
                      Aseguramos que tu empresa cumpla con todas las normativas.
                    </p>
                  </div>
                  <div
                    className="p-4 bg-black shadow-md rounded text-white cursor-pointer"
                    onClick={() => scrollToSection('riesgoHumano-section')}
                  >
                    <div className="font-bold text-xl mb-2">Riesgo Humano</div>
                    <p className="text-size-small text-gray-300">
                      Gestionamos y mitigamos riesgos asociados al factor humano.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li className="cursor-pointer" onClick={scrollToContact}>
            Background
          </li>
          <li className="cursor-pointer" onClick={scrollToTop}>
            ¿Quiénes somos?
          </li>
        </ul>
        <button
          className="hidden lg:flex bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={redirectToWhatsApp}
        >
          Contactarnos
        </button>
      </div>
    </nav>
  );
};