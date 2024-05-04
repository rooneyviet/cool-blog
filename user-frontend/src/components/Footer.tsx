import React from "react";

const Footer = () => {
  return (
    <div className="mt-8">
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">About Me</h2>
        <div className="flex items-center">
          <img
            src="https://ghost.estudiopatagon.com/wavy/content/images/2023/10/Firefly-tierno-delf-n-esponjoso--render-3d-sobre-fondo-plano--colores-pasteles-suaves--fondo-de-1-o-.jpg"
            alt="Profile"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-gray-600 dark:text-gray-200">
              Hello! My name is [Random Name] working from Japan. I'm a
              developer. I love to create things and learn new things. I'm a big
              fan of anime and manga. I also love to travel and explore new
              places.
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
