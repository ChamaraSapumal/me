import React from "react";
import { FaCode, FaUserFriends, FaLightbulb } from "react-icons/fa";
import ScrollDownProject from "./ScrollDownProject";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I’m Chamara Sapumal, an innovative software engineer with a passion
            for open-source projects and technology. I love building
            applications that solve real-world problems and enhance user
            experiences.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With a strong foundation in JavaScript, React, and TypeScript, I
            thrive on challenges that require creative solutions.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-wrap justify-center">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
            <FaCode className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Software Development</h3>
            <p className="mt-2 text-center">
              Building robust applications with modern frameworks.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
            <FaUserFriends className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Team Collaboration</h3>
            <p className="mt-2 text-center">
              Working effectively in teams to achieve common goals.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105">
            <FaLightbulb className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Creative Solutions</h3>
            <p className="mt-2 text-center">
              Innovating and finding unique solutions to complex problems.
            </p>
          </div>
        </div>
      </div>

      <div>
        <ScrollDownProject />
      </div>
    </section>
  );
};

export default About;
