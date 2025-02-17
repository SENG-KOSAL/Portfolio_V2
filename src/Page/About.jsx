import { tools } from "../Components/Lib/Tooldata";
import React, { memo,  useEffect, useState } from "react";
import { FileText, Code, Sparkles, Heart } from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <div className="inline-block relative group">
      <h2
        data-aos="fade-down"
        data-aos-duration="1000"
        className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
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
          About me
        </span>
      </h2>
    </div>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Heart className="w-5 h-5 text-purple-400" />
      Transforming ideas into digital experiences
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));
const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      {/* Optimized gradient backgrounds with reduced complexity for mobile */}
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-50" />
      </div>

      <div className="relative">
        <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 group-hover:scale-105">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105" />

          {/* Optimized overlay effects - disabled on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block" />

          <img
            src="/images/photo_2024-04-04_22-06-34.jpg"
            alt="Profile"
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
            loading="lazy"
          />

          {/* Advanced hover effects - desktop only */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
            <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
          </div>
        </div>
      </div>
    </div>
  </div>
));
const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Optimized AOS initialization
  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        once: false,
      });
    };

    initAOS();

    // Debounced resize handler
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(initAOS, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0">
        <Header />
        <div className="w-full mx-auto pt-8 sm:pt-12 relative">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className=" bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                  Hello, I'm
                </span>
                <span
                  className="block mt-2 text-gray-200"
                  data-aos="fade-right"
                  data-aos-duration="1300"
                >
                  Seng Kosal
                </span>
              </h2>

              <p
                className="Pabout text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 sm:pb-0"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                "I’m a front-end developer with a passion for building websites
                that are easy to use and look great. I focus on creating
                interactive and responsive web pages using HTML, CSS, and
                React.js. I enjoy bringing designs to life and making sure
                websites work smoothly on all devices. I also have experience
                with MySQL, which helps me manage data and connect it to web
                applications. I’m always excited to learn new tools and
                technologies to improve my work and build better web
                experiences."download="CV_SENG_KOSAL.pdf"
              </p>

              <div className="flex  flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
                <a href="CV_SENG_KOSAL.pdf" download="CV_SENG_KOSAL.pdf" className="w-full lg:w-auto">
                  <button
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="  z-10 relative w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                  >
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
                  </button>
                </a>

                <NavLink
                  smooth
                  to={"#project"}
                  className="z-10 w-full lg:w-auto"
                >
                  <button
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200"
                  >
                    <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                  </button>
                </NavLink>
              </div>
            </div>
            <ProfileImage />
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 ">
      <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block p-6 text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Explore my experience
          </span>
        </h2>
        <p
          className="text-gray-400 mb-8 text-lg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites and applications.
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 z-10 relative"
          data-aos="fade-right"
          data-aos-duration="2300"
        >
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-900 p-4 rounded-xl shadow-md border border-gray-700 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center">
                <img src={tool.icon} alt={tool.name} className="w-10 h-10" />
                <h3 className="text-white font-semibold text-lg ml-4">
                  {tool.name}
                </h3>
              </div>
              {activeIndex === index && (
                <p className="text-gray-400 text-sm mt-3 transition-opacity duration-300">
                  {tool.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
