import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiCoursera } from "react-icons/si";
import { AiFillHome, AiOutlineBars, AiOutlineHistory } from "react-icons/ai";
import { LuTextSelect } from "react-icons/lu";
import { GrLogout, GrSelect } from "react-icons/gr";

const UserSidebar = () => {

  const [isActive, setActive] = useState("false");
    return (
      // user navLink
      <>
        <div>
          <h3 className="text-center border text-neutral-600 px-2 py-1 shadow-sm my-2  bg-cyan-200">
            Student
          </h3>
          <NavLink
            to="my-classes"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <LuTextSelect className="w-5 h-5" />

            <span className="mx-4 font-medium">Selected Class</span>
          </NavLink>
          <NavLink
            to="enrolled-classes"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <GrSelect className="w-5 h-5" />

            <span className="mx-4 font-medium">Enrolled Class</span>
          </NavLink>
          <NavLink
            to="payment-history"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <AiOutlineHistory className="w-5 h-5" />

            <span className="mx-4 font-medium">Payment History</span>
          </NavLink>
        </div>
      </>
    );
};

export default UserSidebar;