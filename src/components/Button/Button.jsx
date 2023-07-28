import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Button = ({ label, onClick, disabled, outline, small }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          pe-10
          px-4
          ${outline ? "bg-white" : "bg-rose-500"}
          ${outline ? "border-black" : "border-rose-500"}
          ${outline ? "text-black" : "text-white"}
          ${small ? "text-sm" : "text-md"}
          ${small ? "py-2" : "py-3"}
          ${small ? "font-light" : "font-semibold"}
          ${small ? "border-[1px]" : "border-2"}
        `}
    >
      {label}
      <HiOutlineArrowLongRight
        size={24}
        className="
              absolute
              top-1/2 right-6 transform translate-x-1/2 -translate-y-1/2
            "
      />
    </button>
  );
};

export default Button;
