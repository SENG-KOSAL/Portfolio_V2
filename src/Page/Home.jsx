import React, { useEffect } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileText} from "lucide-react";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out" });
  }, []);

  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text Section */}
        <div className="flex-1 space-y-6 z-10 relative" data-aos="fade-up">
          {/* Status & Avatar */}
          <div className="flex items-center gap-3">
            <p className="text-sm text-gray-300 flex items-center gap-1">
              <span className="text-green-500">●</span> Available for work
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Feel free to check out my workk
          </h1>

          {/* Action Buttons */}
          <div className="flex gap-4 z-10 relative">
            <NavLink smooth to={"#about"} className="z-10 relative">
              <button className=" hover:bg-gray-700 text-white border border-[#a855f7]/50 font-medium py-3 px-6 rounded-lg flex items-center gap-2">
                Scroll down ⬇️
              </button>
            </NavLink>
            <a href="CV_SENG_KOSAL.pdf" data-aos="fade-up"
                    data-aos-duration="1000"
                    className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10 animate-bounce-slow delay-200">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> View My CV
            </a>
            
          </div>
        </div>

        {/* Right Side - Animated Image */}
        <div className="flex-1 flex justify-center" data-aos="fade-left">
          <img
            src="/images/output-onlinegiftools.gif"
            alt="Profile"
            className="rounded-lg shadow-lg"
            loading="lazy"
            width={"500"}
            height={"500"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
