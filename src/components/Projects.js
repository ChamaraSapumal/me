import React from "react";
import HospitalManagementImage from "../assets/hospitalManagement.png";
import HospitalOne from "../assets/hospitalOne.png";
import ClothingShop from "../assets/clothingShop.png";
import WeatherApp from "../assets/weatherApp.png";
import BurgerShop from "../assets/burgerShop.png";
import TourBooking from "../assets/tourBooking.png";
import GoDown from "../components/GoDown";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaAngular,
  FaSass,
} from "react-icons/fa"; // Import technology icons

const projects = [
  {
    title: "Hospital Management System",
    description:
      "Streamlines hospital operations with patient management and appointment scheduling.",
    link: "https://chamarasapumal.github.io/hospital-management-landing",
    image: HospitalManagementImage,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />], // Add technologies used
  },
  {
    title: "Hospital Portfolio",
    description:
      "A platform for managing healthcare projects and collaboration.",
    link: "https://chamarasapumal.github.io/hospital-one/",
    image: HospitalOne,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />],
  },
  {
    title: "Clothing Shop",
    description:
      "E-commerce platform for clothing sales and inventory management.",
    link: "https://chamarasapumal.github.io/handy-test/",
    image: ClothingShop,
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaBootstrap />],
  },
  {
    title: "Burger Shop",
    description:
      "Management system for fast-food order tracking and customer service.",
    link: "https://chamarasapumal.github.io/mosburgers/",
    image: BurgerShop,
    technologies: [<FaAngular />, <FaHtml5 />, <FaSass />, <FaBootstrap />],
  },
  {
    title: "Weather Application",
    description: "Provides real-time weather updates and forecasts.",
    link: "https://chamarasapumal.github.io/weather-app/",
    image: WeatherApp,
    technologies: [<FaJs />, <FaHtml5 />, <FaCss3Alt />],
  },
  {
    title: "Touring Website",
    description: "Explore and book tours with itinerary management.",
    link: "https://chamarasapumal.github.io/hismatours/",
    image: TourBooking,
    technologies: [<FaHtml5 />, <FaCss3Alt />, <FaBootstrap />],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects That Define Me
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl relative" // Set position relative for absolute positioning of icons
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
                className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient-move text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Live Demo
              </a>
            </div>

            {/* Technology Icons */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-gray-600 text-xl">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <GoDown />
    </section>
  );
};

export default Projects;
