// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold">Sapumal Cham</h1>
//         <ul className="flex space-x-4">
//           <li>
//             <a href="#home" className="hover:text-gray-400">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-gray-400">
//               About Me
//             </a>
//           </li>
//           <li>
//             <a href="#expertise" className="hover:text-gray-400">
//               Expertise
//             </a>
//           </li>
//           <li>
//             <a href="#projects" className="hover:text-gray-400">
//               Work
//             </a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-gray-400">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-5 left-1/2 transform -translate-x-1/2 rounded-full shadow-lg w-auto z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-xl mr-3 font-bold cursor-pointer transition duration-300 hover:text-blue-400 whitespace-nowrap animate-pulse">
          Sapumal Cham
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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
