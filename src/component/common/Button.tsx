import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  backgroundColor: string;
  backgroundColorOnHover: string;
  textColor: string;
  textColorOnHover: string;
  iconColor: string;
  iconColorOnHover: string;
  arrowBackground: string;
  arrowBackgroundOnHover: string;
  title: string;
  onClick:()=>void
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  backgroundColorOnHover,
  textColor,
  textColorOnHover,
  iconColor,
  iconColorOnHover,
  arrowBackground,
  arrowBackgroundOnHover,
  title,
  onClick
}) => {
  return (
    <div>
      <div
      onClick={onClick}
        className={`group rounded-3xl w-fit flex items-center gap-3 ${backgroundColor} py-2 px-4 relative overflow-hidden transition-all duration-300 ease-in-out cursor-pointer hover:${backgroundColorOnHover} hover:-translate-y-[2px]`}
      >
        <h3
          className={`text-sm md:text-lg relative z-10 ${textColor} group-hover:${textColorOnHover}`}
        >
          {title}
        </h3>

        {/* Expanding Background Effect */}
        <div
          className={`absolute inset-0 ${backgroundColorOnHover} transform scale-0 origin-center transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:${backgroundColorOnHover} z-0`}
        />

        {/* Arrow inside white circular background */}
        <div
          className={`${arrowBackground} group-hover:${arrowBackgroundOnHover} p-2 rounded-full relative z-10`}
        >
          <FiArrowRight
            className={`w-4 h-4 md:w-5 md:h-5 font-bold ${iconColor} group-hover:${iconColorOnHover} transition-transform duration-300 -rotate-45 group-hover:rotate-0`}
          />
        </div>
      </div>
    </div>
  );
};

export default Button;
