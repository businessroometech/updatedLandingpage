import React from "react";

const FirstSection: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-white to-[#3daef4]/40 grid grid-cols-1 md:grid-cols-2  place-items-center ">
      <div className="col-span-1 lg:px-8 px-4 flex justify-center items-center flex-col gap-10">
        <h1 className="text-4xl font-semibold leading-10 tracking-wider">
          Get Started The Game-changing community of Founders, Investors, and
          Acquirers
        </h1>
        <p className="text-lg font-normal text-gray-600">
          Empowering connections between visionary founders, strategic
          investors, and ambitious acquirers, fostering collaboration, growth,
          and opportunities across the startup ecosystem.
        </p>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default FirstSection;
