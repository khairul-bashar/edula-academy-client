import React from "react";
import { NavLink } from "react-router-dom";
import { SiCoursera } from "react-icons/si";
import {
  AiOutlineUsergroupAdd,
  AiOutlineBars,
  AiOutlineHistory,
} from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const AdminSidebar = () => {
  return (
    <>
      <div>
        <h3 className="text-center border text-neutral-600 px-2 py-1 shadow-sm my-2  bg-cyan-200">
          Admin
        </h3>
        <NavLink
          to="manage-courses"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <SiCoursera className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Course</span>
        </NavLink>
        <NavLink
          to="manage-instructor"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <MdOutlineAdminPanelSettings className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Instructor</span>
        </NavLink>
        <NavLink
          to="manage-student"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <AiOutlineUsergroupAdd className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Student</span>
        </NavLink>
      </div>
    </>
  );
};

export default AdminSidebar;
