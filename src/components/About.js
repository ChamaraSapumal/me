import React, { useState } from "react";
import {
  FaCode,
  FaUserFriends,
  FaLightbulb,
  FaEllipsisH,
} from "react-icons/fa";
import ScrollDownProject from "./ScrollDownProject";
import Lottie from "lottie-react"; // Import Lottie
import sayHiAnimation from "../assets/AboutBackground.json"; // Ensure the path is correct

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle paragraph visibility

  return (
    <section
      id="about"
      // className="py-20 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:ml-14 px-6 lg:px-0">
        <div className="lg:w-1/2 lg:pr-10 mb-10 lg:mb-0 relative">
          {/* Full Background Animation */}
          <div className="absolute inset-0 z-0">
            {" "}
            {/* Set z-0 to push animation behind */}
            <Lottie
              animationData={sayHiAnimation}
              loop={true}
              autoplay={true}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: 0.2,
              }}
            />
          </div>

          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-move relative z-10">
            A Little About Me
          </h2>

          <p
            className={`text-lg text-gray-700 mb-4 transition-all duration-300 relative z-10 ${
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
          <div className="sm:hidden mt-2 flex justify-end z-10 relative">
            {isExpanded ? (
              <button
                onClick={() => setIsExpanded(false)}
                className="flex items-center text-blue-500 hover:underline transition duration-300 z-10"
              >
                See Less
              </button>
            ) : (
              <button
                onClick={() => setIsExpanded(true)}
                className="flex items-center text-blue-500 hover:underline transition duration-300 z-10"
              >
                <FaEllipsisH className="mr-1" />
                See More
              </button>
            )}
          </div>

          {/* Full paragraph visible on larger screens */}
          <p className="text-lg text-gray-700 mb-4 hidden lg:block relative z-10">
            My academic foundation, paired with a knack for creative
            problem-solving, positions me to tackle the most intricate
            engineering and software challenges with innovation and precision.
          </p>

          <a
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 transform hover:scale-105 relative z-10 mt-4 inline-block"
          >
            Get in Touch
          </a>
        </div>

        <div className="lg:w-1/2 flex flex-wrap justify-center relative z-10">
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
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg m-4 transition-transform transform hover:scale-105 hover:shadow-xl w-full sm:w-56 relative z-10 group"
            >
              <div className="text-5xl mb-4 group-hover:animate-bounce">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center group-hover:text-blue-500 transition-all duration-300">
                {skill.title}
              </h3>
              <p className="mt-2 text-center text-gray-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <ScrollDownProject />
    </section>
  );
};

export default About;
