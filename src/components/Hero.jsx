import React, { useState, useEffect } from 'react';

const Hero = () => {
  const cards = [
    { title: 'Pentesting', subtitle: 'Equipo de ethical hacking', content: 'Dispuestos a realizar pruebas de penetración de manera exhaustiva, analizando y detectando respectivas amenazas que se puedan presentar.' },
    { title: 'Herramientas', subtitle: '¿Con qué trabajamos?', content: 'Nuestro equipo implementa las mejores y más innovadoras herramientas para realizar cualquiera de nuestros servicios.' },
    { title: 'Ingeniería social', subtitle: 'Equipo TI', content: 'Podemos capacitar equipos TI desde nuestra experiencia y conocimiento, para así evitar problemas de phishing o demás malwares que se hacen a través del riesgo humano.' },
    { title: 'Equipo que lo conforma', subtitle: 'Especialistas', content: 'Se cuenta con un grupo de especialistas de alta calidad no solo en el área de ataque y defensa, también contamos con analistas de datos y machine learning.' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000); // Cambiar cada 4 segundos para pruebas

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <section className="bg-gradient-to-b from-gray-700 to-black py-8 flex flex-col lg:flex-row items-center relative overflow-hidden">
      <div className="container mx-auto text-center lg:text-left text-white z-10 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4"></h1>
        <p className="text-lg leading-relaxed mx-auto max-w-2xl mb-6">
          En FixLat Security, somos expertos en ciberseguridad, dedicados a proteger los activos digitales de nuestros clientes con soluciones avanzadas. Nuestro equipo de especialistas utiliza las últimas tecnologías en machine learning y análisis de datos para anticiparse a las amenazas, garantizando la integridad y confidencialidad de la información.
        </p>
        <p className="text-lg leading-relaxed mx-auto max-w-2xl mb-6">
          Ofrecemos medidas de protección personalizadas, asegurando un entorno digital seguro y eficiente. Nuestro compromiso con la innovación y la experiencia técnica nos permite proporcionar servicios de alta calidad que se adaptan a las necesidades específicas de cada negocio.
        </p>
        <p className="text-lg leading-relaxed mx-auto max-w-2xl mb-6">
          Confíe en FixLat Security para mantener su empresa segura en el mundo digital.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center z-10 relative mt-8 lg:mt-0">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full sm:w-80 p-6 shadow-lg bg-white bg-opacity-20 rounded-lg transform transition-all duration-1000 ease-in-out ${
              index === activeIndex ? 'opacity-100 translate-y-0 shadow-xl scale-105' : 'opacity-0 translate-y-full'
            }`}
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: cards.length - index,
              visibility: index === activeIndex ? 'visible' : 'hidden', // Ocultar tarjetas no activas
              maxWidth: '90%', // Ajuste del ancho máximo para dispositivos móviles
            }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-2 text-white">{card.title}</h2>
            <h3 className="text-lg lg:text-xl text-gray-300 mb-2">{card.subtitle}</h3>
            <p className="text-gray-300">{card.content}</p>
          </div>
        ))}
      </div>
      {/* Overlay para oscurecer el fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 opacity-50"></div>
      {/* Borde para el efecto de marco */}
      <div className="absolute inset-0 border border-gray-600 rounded-lg"></div>
    </section>
  );
};

export default Hero;


