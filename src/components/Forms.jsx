import React from 'react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black to-gray-700">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        {/* Descripción y título centrado verticalmente */}
        <div className="text-center lg:text-left text-white lg:w-1/2 lg:pr-12">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-lg text-gray-300 mb-10">
            Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros a través de los siguientes medios.
          </p>
        </div>
        {/* Tarjeta de Contacto: Gmail */}
        <div className="flex justify-center lg:justify-end lg:w-1/4">
          <div
            className="contact-card p-6 bg-white rounded shadow-lg m-4 flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => window.location.href = "mailto:tuemail@gmail.com"}
          >
            <img
              src="src/assets/email.png"
              alt="Gmail"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Correo Electrónico</h3>
            <p className="text-gray-700 mb-4">Click para mandar un correo</p>
          </div>
        </div>
        {/* Tarjeta de Contacto: WhatsApp */}
        <div className="flex justify-center lg:w-1/4">
          <div
            className="contact-card p-6 bg-white rounded shadow-lg m-4 flex flex-col items-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => window.open("https://wa.link/x5p8n6", "_blank")}
          >
            <img
              src="src/assets/whatsapp.png"
              alt="WhatsApp"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-700 mb-4">Click para enviar un mensaje</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
