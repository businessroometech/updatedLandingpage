import React from "react";
import Logo from "../assets/logo.png";
import { FiArrowRight } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <div className="bg-white/10  backdrop-blur-xs fixed top-0 left-0 w-full h-16 flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex justify-between items-center w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <div>
          <img className="w-40 sm:w-48 md:w-60 h-auto" src={Logo} alt="Logo" />
        </div>

        {/* Button - Hidden on very small screens */}
        <div className="hidden sm:block">
          <div className="group flex items-center gap-3 rounded-3xl bg-[#3daef4] py-2 px-4 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#4E2FDA] hover:-translate-y-[2px]">
            <h3 className="text-sm md:text-lg text-white relative z-10">
              Get Started
            </h3>

            {/* Expanding Background Effect */}
            <div className="absolute inset-0 bg-[#4E2FDA] scale-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-100 z-0"></div>

            {/* Arrow inside white circular background */}
            <div className="bg-white p-2 rounded-full relative z-10">
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#3daef4] transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
