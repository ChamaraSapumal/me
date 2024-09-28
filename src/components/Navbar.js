import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 bg-opacity-80 text-white p-4 fixed top-5 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg w-auto z-10 transition duration-300 hover:bg-gray-800 hover:bg-opacity-100">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl mr-3 font-bold cursor-pointer transition duration-300 hover:text-blue-400 whitespace-nowrap animate-bounce">
          Sapumal Cham
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 animate-pulse">
          {/* Hidden on small screens */}
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition duration-300"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              className="hover:text-blue-400 transition duration-300"
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition duration-300"
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
