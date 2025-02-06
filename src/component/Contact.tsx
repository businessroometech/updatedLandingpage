import React from "react";
import Select from "react-select";
import { FiArrowRight } from "react-icons/fi";

const Contact: React.FC = () => {
  const options = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-green-200/40 flex flex-col items-center py-10 px-4">
      {/* Header Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
          Get In Touch With Us Today
        </h1>
        <p className="text-slate-800 font-thin text-sm md:text-base tracking-wide mt-4">
          We're here to help! If you have any questions or would like to
          discuss, reach out to us.
        </p>
      </div>

      {/* Contact & Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 w-full max-w-6xl">
        {/* Contact Info Card */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-full ">
          <div className="border-b border-gray-700 pb-4 ">
            <h2 className="text-2xl font-semibold tracking-widest">
              Contact Info
            </h2>
            <p className="text-slate-300 text-sm tracking-widest mt-4">
              Feel free to reach out to us through any of the channels below.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <i className="fa-solid fa-location-dot text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Our Location</h3>
                <p className="text-slate-300 text-sm">
                  30 N Gould St Ste R, Sheridan, WY 82801, USA
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <i className="fa-solid fa-phone text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone Number</h3>
                <p className="text-slate-300 text-sm">123-456-7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <i className="fa-solid fa-envelope text-white"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p className="text-slate-300 text-sm">contact@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below, and we'll get back to you soon.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="YOUR_ACCESS_KEY_HERE"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
                className="w-full p-3 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full p-3 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full p-3 border-gray-300 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {/* Country Dropdown */}
              <div className="col-span-2">
                <Select
                  options={options}
                  className="w-full z-20"
                  placeholder="Select Country"
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-2 w-full p-3 border border-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>

              {/* Submit Button */}

              <div className="group w-fit flex items-center justify-center gap-3 rounded-3xl bg-[#4E2FDA]  py-2 px-4 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:bg-[#4E2FDA] hover:-translate-y-[2px]">
                <h3 className="text-sm md:text-lg text-white relative z-10">
                  Submit
                </h3>

                {/* Expanding Background Effect */}
                <div className="absolute inset-0 bg-[#3daef4]  scale-0 origin-center transition-transform duration-300 ease-in-out group-hover:scale-100 z-0"></div>

                {/* Arrow inside white circular background */}
                <div className="bg-white p-2 rounded-full relative z-10">
                  <FiArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#4E2FDA]  transition-transform duration-300 -rotate-45 group-hover:rotate-0" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
