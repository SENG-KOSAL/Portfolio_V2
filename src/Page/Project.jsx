import React, { useState } from "react";
import "aos/dist/aos.css";

// import CartProject from "../Components/CartProject";
import { cart } from "../Components/Lib/CartProject";

const Project = () => {
  const [showDetails, setShowDetails] = useState(null); // Track which project is expanded

  const toggleDetails = (id) => {
    setShowDetails((prev) => (prev === id ? null : id)); // Toggle project details visibility
  };

  return (
    <div>
      {/* Header section */}
      <div className="text-center pb-10 ">
        <h2
          className="Pproject p-6 inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Project Showcase
          </span>
        </h2>
        <p
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          "Explore my journey through two projects: an online store built with HTML, CSS, and React.js, where I use JSON files to manage product data, and an inventory management system developed in Java to efficiently track stock and streamline processes. These projects showcase my technical skills and ongoing learning."
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-col items-center z-10 relative">
        <div className="flex flex-wrap justify-center">
          {cart.map((project) => (
            <div
              key={project.id}
              className="m-4 p-6 bg-gray rounded-lg shadow-md w-80 relative pointer-events-auto transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <img
                src={project.Img}
                alt={project.Title}
                className="rounded-t-lg mb-4 "
              />
              <h2 className="text-xl font-semibold mb-2 text-white">{project.Title}</h2>
              <p className="text-gray-600 mb-4">{project.Description}</p>

              <div className="flex justify-between items-center">
                <a
                  href={project.Link}
                  target="_blank"
                  className="bg-black text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  Live Demo
                </a>

                <button
                  onClick={() => toggleDetails(project.id)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
                >
                  {showDetails === project.id ? "Hide Details" : "Show Details"}
                </button>
              </div>

              {/* Show Details when clicked */}
              {showDetails === project.id && (
                <div className="mt-4 p-3 bg-gray text-white  rounded-lg border-l-4 border-blue-500">
                  <p>{project.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
