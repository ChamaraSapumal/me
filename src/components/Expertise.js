import React from "react";
import { FaCode, FaDesktop, FaDatabase } from "react-icons/fa";

const Expertise = () => {
  return (
    <section id="expertise" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">My Expertise</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCode className="text-blue-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Software Development</h3>
          <p className="mt-2 text-center">
            Building robust applications with modern frameworks and best
            practices.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaDesktop className="text-green-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Frontend Development</h3>
          <p className="mt-2 text-center">
            Creating responsive and user-friendly interfaces using React.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaDatabase className="text-orange-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Database Management</h3>
          <p className="mt-2 text-center">
            Managing data efficiently with SQL and NoSQL databases.
          </p>
        </div>

        {/* Additional Expertise Cards */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaCode className="text-purple-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">Open Source Contributions</h3>
          <p className="mt-2 text-center">
            Contributing to various open-source projects to enhance community
            resources.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaDesktop className="text-red-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">UI/UX Design</h3>
          <p className="mt-2 text-center">
            Designing intuitive interfaces that enhance user experience.
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FaDatabase className="text-teal-500 text-5xl mb-4" />
          <h3 className="text-xl font-semibold">API Development</h3>
          <p className="mt-2 text-center">
            Creating and managing RESTful APIs for seamless data integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
