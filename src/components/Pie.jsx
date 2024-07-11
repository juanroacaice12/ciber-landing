import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto text-center">
        <p>© 2024 FixLat Security. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Enlaces a redes sociales */}
          <a href="https://wa.link/x5p8n6" className="text-white">WhatsApp</a>
          <a href="mailto:contact@deltaprotect.com" className="text-white">Gmail</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
