import React from "react";
import Bg1 from "../assets/cta-bg1.png";
import Bg2 from "../assets/cta-bg2.png";
import { FiArrowRight } from "react-icons/fi";

const Footer: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#4E2FDA] py-12 px-4 sm:px-6 md:px-12 lg:px-16 text-white text-center">
      {/* Background Images */}
      <img
        src={Bg1}
        alt=""
        className="absolute bottom-0 left-0 w-1/2 sm:w-1/3 opacity-70 md:opacity-90 rotate-180"
      />
      <img
        src={Bg2}
        alt=""
        className="absolute top-0 right-0 w-1/2 sm:w-1/3 opacity-70 md:opacity-90 rotate-180"
      />

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          Connect, collaborate, and grow <br className="hidden sm:block" />
          within a dynamic ecosystem
        </h2>
        <p className="mt-4 text-base sm:text-lg opacity-90">
          Engage with like-minded individuals, exchange innovative ideas,{" "}
          <br className="hidden md:block" />
          and build meaningful partnerships in a thriving{" "}
          <br className="hidden md:block" />
          and ever-evolving community.
        </p>

        <div className="w-fit mx-auto mt-6">
          <div className="group rounded-3xl flex items-center gap-3 bg-white py-2 px-4 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#3daef4] hover:-translate-y-[2px]">
            <h3 className="text-sm md:text-lg relative z-10 text-[#4E2FDA]
            group-hover:text-white">
              Register
            </h3>

            {/* Expanding Background Effect */}
            <div className="absolute inset-0 bg-bg-[#3daef4] transform scale-0 origin-center transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:bg-bg-[#3daef4] z-0"></div>

            {/* Arrow inside white circular background */}
            <div className="bg-[#4E2FDA] group-hover:bg-white p-2 rounded-full relative z-10">
              <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 font-bold  text-white group-hover:text-[#3daef4] transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
