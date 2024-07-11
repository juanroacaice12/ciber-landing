import React from 'react';

const Metodologia = () => {
  return (
    <div className="bg-gray-100 py-16">
      <h2 className="text-center text-4xl font-bold text-black mb-12">
        Nuestra <span className="text-black-600">Metodología</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-around items-center flex-wrap max-w-5xl mx-auto">
        <div className="text-center w-full sm:w-1/3 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 relative">
            <div className="bg-gray-600 p-6 rounded-full mb-6 mx-auto">
              <svg
                className="h-16 w-16 text-white mx-auto"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Evaluación Inicial</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
              <li>Reunión con el cliente</li>
              <li>Revisión de la infraestructura</li>
              <li>Análisis de riesgos y vulnerabilidades</li>
            </ul>
          </div>
        </div>
        <div className="text-center w-full sm:w-1/3 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105 mt-10 sm:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 relative">
            <div className="bg-gray-600 p-6 rounded-full mb-6 mx-auto">
              <svg
                className="h-16 w-16 text-white mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Planificación</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
              <li>Definición de objetivos y metas de seguridad a corto y largo plazo</li>
              <li>Desarrollo de un plan de acción detallado, incluyendo cronograma y recursos necesarios</li>
            </ul>
          </div>
        </div>
        <div className="text-center w-full sm:w-1/3 p-4 transform transition-transform duration-500 ease-in-out hover:scale-105 mt-10 sm:mt-0">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 relative">
            <div className="bg-gray-600 p-6 rounded-full mb-6 mx-auto">
              <svg
                className="h-16 w-16 text-white mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Implementación</h3>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
              <li>Comienzo del desarrollo implementando herramientas de manera efectiva</li>
              <li>Formación y capacitación del personal en prácticas de ciberseguridad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metodologia;
