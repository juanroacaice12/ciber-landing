import React from 'react';

const Testimonials = () => {
  return (
    <section id="background-section" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonio 1 */}
          <div className="p-6 rounded shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Experiencia y Especialización en Tecnología y Ciberseguridad</h3>
            <p className="text-gray-700">
              En FIXLAT SAS, contamos con una vasta experiencia y especialización en tecnología y ciberseguridad. Brindamos soluciones innovadoras y efectivas para satisfacer las necesidades de nuestros clientes. Nuestro enfoque en la excelencia y la pasión por lo que hacemos nos permite enfrentar desafíos tecnológicos con determinación y creatividad.
            </p>
          </div>

          {/* Testimonio 2 */}
          <div className="p-6 rounded shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Enfoque en la Excelencia y la Pasión</h3>
            <p className="text-gray-700">
              En FIXLAT SAS, estamos comprometidos con la excelencia y la pasión por nuestro trabajo. Este compromiso nos impulsa a buscar soluciones innovadoras y efectivas en el ámbito de la tecnología y la ciberseguridad. Nuestra dedicación y creatividad nos permiten superar desafíos tecnológicos y ofrecer el mejor servicio a nuestros clientes.
            </p>
          </div>

          {/* Testimonio 3 */}
          <div className="p-6 rounded shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl lg:text-2xl font-semibold mb-4">Presencia Nacional e Internacional</h3>
            <p className="text-gray-700">
              Gracias a nuestra experiencia y especialización, en FIXLAT SAS no solo operamos a nivel nacional, sino que también hemos expandido nuestras operaciones internacionalmente. Hemos trabajado en proyectos con empresas de países como México y Perú, demostrando nuestra capacidad para brindar soluciones tecnológicas y de ciberseguridad de alto nivel en diversos mercados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
