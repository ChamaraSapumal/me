import React from "react";

const projects = [
  {
    title: "Hospital Management System",
    description: "A comprehensive system to manage hospital operations.",
    link: "#",
    image:
      "https://via.placeholder.com/400x250?text=Hospital+Management+System", // Replace with actual image URL
  },
  {
    title: "Project Two",
    description: "An innovative solution for project management.",
    link: "#",
    image: "https://via.placeholder.com/400x250?text=Project+Two", // Replace with actual image URL
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        My Projects
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-t-lg w-full h-48 object-cover"
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
