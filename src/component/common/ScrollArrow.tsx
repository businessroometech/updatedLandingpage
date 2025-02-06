import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200); // Show button after scrolling 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className={`fixed z-50 bottom-10 right-10 flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#3daef4] bg-transparent shadow-lg cursor-pointer transition-all duration-300 ${
        isVisible
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.75 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#3daef4] transition-all duration-300"
        whileHover={{ backgroundColor: "#4E2FDA", scale: 1.1 }}
      >
        <FiArrowUp className="text-white w-6 h-6" />
      </motion.div>
    </motion.div>
  );
};

export default ScrollToTop;
