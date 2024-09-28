import React from "react";
import ScrollDown from "./ScrollDown"; // Ensure the path is correct
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing icons

const Hero = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-bold animate-pulse">Sapumal Cham</h1>
        <p className="mt-4 text-xl mb-6">
          Innovative Software Engineer & Tech Enthusiast
        </p>
        <div className="mt-12">
          <a
            href="#about"
            className="bg-white text-blue-500 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
          >
            Discover More
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-11 space-x-6">
          <a
            href="https://github.com/ChamaraSapumal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="www.linkedin.com/in/sapumal-aryarathne-127599312"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/SapumalCham"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <FaTwitter size={30} />
          </a>
        </div>
      </div>

      {/* Scroll Down Icon Positioned at the Bottom */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ScrollDown />
      </div>
    </header>
  );
};

export default Hero;
