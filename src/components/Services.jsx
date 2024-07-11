import React, { useState } from 'react';
import { FiLock, FiUserCheck } from 'react-icons/fi';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleService = (service) => {
    if (expandedService === service) {
      setExpandedService(null);
    } else {
      setExpandedService(service);
    }
  };

  return (
    <section id="services-section" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-left mb-10">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Servicio 1: Ciberseguridad */}
          <div className="service-card-wrapper">
            <h3 className="text-xl font-semibold text-white mb-4">Ciberseguridad</h3>
            <div
              id="ciberseguridad-section"
              className={`service-card bg-gray-100 rounded shadow-lg overflow-hidden relative cursor-pointer ${
                expandedService === 'ciberseguridad' ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleService('ciberseguridad')}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                <FiLock
                  className="h-32 w-32 text-black-500 transition-transform duration-300 transform scale-100 hover:scale-105"
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    expandedService === 'ciberseguridad' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="text-white text-2xl font-semibold text-center">Ciberseguridad</h3>
                </div>
              </div>
              {expandedService === 'ciberseguridad' && (
                <div className="p-6 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
                  <button className="text-gray-700 mb-4 focus:outline-none">
                    {expandedService === 'ciberseguridad' ? 'Cerrar detalles' : 'Ver detalles'}
                  </button>
                  <div>
                    <p className="text-gray-700 mb-4">Para proteger proactivamente tus sistemas</p>
                    <ul className="text-gray-700">
                      <li>
                        <strong>Análisis de vulnerabilidades:</strong> Detectamos y analizamos vulnerabilidades mucho más rápido.
                      </li>
                      <li>
                        <strong>Protección del endpoint:</strong> Detección y mitigación de amenazas.
                      </li>
                      <li>
                        <strong>Seguridad de la nube:</strong> Audite y evalúe su infraestructura.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Servicio 2: Cumplimiento */}
          <div className="service-card-wrapper">
            <h3 className="text-xl font-semibold text-white mb-4">Cumplimiento</h3>
            <div
              id="cumplimiento-section"
              className={`service-card bg-gray-100 rounded shadow-lg overflow-hidden relative cursor-pointer ${
                expandedService === 'cumplimiento' ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleService('cumplimiento')}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                <svg className="h-32 w-32 text-black-500 transition-transform duration-300 transform scale-100 hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"/>
                </svg>
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    expandedService === 'cumplimiento' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="text-white text-2xl font-semibold text-center">Cumplimiento</h3>
                </div>
              </div>
              {expandedService === 'cumplimiento' && (
                <div className="p-6 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
                  <button className="text-gray-700 mb-4 focus:outline-none">
                    {expandedService === 'cumplimiento' ? 'Cerrar detalles' : 'Ver detalles'}
                  </button>
                  <div>
                    <p className="text-gray-700 mb-4">Para asegurarte de que cumples con todas las normativas</p>
                    <ul className="text-gray-700">
                      <li>
                        <strong>Cumplimiento ISO 27001:</strong> Gestión y revisión de todo el cumplimiento con la normativa.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Servicio 3: Riesgo Humano */}
          <div className="service-card-wrapper">
            <h3 className="text-xl font-semibold text-white mb-4">Riesgo Humano</h3>
            <div
              id="riesgoHumano-section"
              className={`service-card bg-gray-100 rounded shadow-lg overflow-hidden relative cursor-pointer ${
                expandedService === 'riesgoHumano' ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => toggleService('riesgoHumano')}
            >
              <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
                <FiUserCheck
                  className="h-32 w-32 text-black-500 transition-transform duration-300 transform scale-100 hover:scale-105"
                />
                <div
                  className={`absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ${
                    expandedService === 'riesgoHumano' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <h3 className="text-white text-2xl font-semibold text-center">Riesgo Humano</h3>
                </div>
              </div>
              {expandedService === 'riesgoHumano' && (
                <div className="p-6 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100">
                  <button className="text-gray-700 mb-4 focus:outline-none">
                    {expandedService === 'riesgoHumano' ? 'Cerrar detalles' : 'Ver detalles'}
                  </button>
                  <div>
                    <p className="text-gray-700 mb-4">Para capacitar y proteger a sus empleados</p>
                    <ul className="text-gray-700">
                      <li>
                        <strong>Violación de datos:</strong> Evita fugas de datos.
                      </li>
                      <li>
                        <strong>Simulaciones de phishing:</strong> Fortalece tu defensa contra los ataques.
                      </li>
                      <li>
                        <strong>Formación para colaboradores:</strong> Crear una cultura de ciberseguridad.
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
