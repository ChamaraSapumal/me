import React, { useState } from "react";
import {
  FaCode,
  FaUserFriends,
  FaLightbulb,
  FaEllipsisH,
} from "react-icons/fa";
import ScrollDownProject from "./ScrollDownProject";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle paragraph visibility

  return (
    <section id="about" className="py-16 bg-white mb-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:ml-14">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0">
          <h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-move"
            style={{ backgroundSize: "200% 200%" }}
          >
            A Little About Me
          </h2>

          <p
            className={`text-lg text-gray-700 mb-4 transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            I’m Chamara Sapumal, a passionate engineer in training, currently
            navigating my journey through a Bachelor of Engineering Technology
            (Honors) in Mechanical Engineering Technology at Uva Wellassa
            University of Sri Lanka. With aspirations to become an Automation
            Engineer, I am driven by the desire to merge the digital and
            physical worlds seamlessly. Equipped with a strong command of
            AutoCAD and SolidWorks, I bring ideas to life by designing and
            prototyping mechanical systems. My love for open-source projects
            fuels my desire to create software that addresses real-world needs.
            By fusing front-end, back-end, and database expertise, I craft
            full-stack applications that are both efficient and scalable.
          </p>

          {/* Show "See More" or "See Less" button based on state */}
          <div className="sm:hidden mt-2 flex justify-end">
            {isExpanded ? (
              <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center text-blue-500 hover:underline transition duration-300"
              >
                See Less
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center text-blue-500 hover:underline transition duration-300"
              >
                <FaEllipsisH className="mr-1" />
                See More
              </button>
            )}
          </div>

          {/* Full paragraph visible on larger screens */}
          <p className={`text-lg text-gray-700 mb-4 hidden lg:block`}>
            My academic foundation, paired with a knack for creative
            problem-solving, positions me to tackle the most intricate
            engineering and software challenges with innovation and precision.
          </p>

          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-wrap justify-center">
          {/* Skill Cards */}
          {[
            {
              icon: <FaCode className="text-orange-500" />,
              title: "Software Development",
              description:
                "Building robust applications with modern frameworks.",
            },
            {
              icon: <FaUserFriends className="text-green-800" />,
              title: "Team Collaboration",
              description:
                "Working effectively in teams to achieve common goals.",
            },
            {
              icon: <FaLightbulb className="text-yellow-400" />,
              title: "Creative Solutions",
              description:
                "Innovating and finding unique solutions to complex problems.",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              <div className="text-blue-500 text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-2 text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Project */}
      <div>
        <ScrollDownProject />
      </div>
    </section>
  );
};

export default About;
