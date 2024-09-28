import React from "react";
import HospitalManagementImage from "../assets/hospitalManagement.png";
import HospitalOne from "../assets/hospitalOne.png";
import ClothingShop from "../assets/clothingShop.png";
import WeatherApp from "../assets/weatherApp.png";
import BurgerShop from "../assets/burgerShop.png";

const projects = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system to manage hospital operations.",
    link: "https://chamarasapumal.github.io/hospital-management-landing",
    image: HospitalManagementImage,
  },
  {
    title: "Hospital Portfolio",
    description: "An innovative solution for project management.",
    link: "https://chamarasapumal.github.io/hospital-one/",
    image: HospitalOne,
  },
  {
    title: "Clothing Shop",
    description: "A comprehensive system to manage clothing operations.",
    link: "https://chamarasapumal.github.io/handy-test/",
    image: ClothingShop,
  },
  {
    title: "Burger Shop",
    description: "A comprehensive system to manage clothing operations.",
    link: "https://chamarasapumal.github.io/mosburgers/",
    image: BurgerShop,
  },
  {
    title: "Weather Application",
    description: "A comprehensive system to manage clothing operations.",
    link: "https://chamarasapumal.github.io/weather-app/",
    image: WeatherApp,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-contain" // Full image display
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
