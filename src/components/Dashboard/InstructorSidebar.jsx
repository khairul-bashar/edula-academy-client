
import { BiSolidAddToQueue } from "react-icons/bi";
import { SiCoursera } from "react-icons/si";
import { NavLink } from "react-router-dom";
const InstructorSidebar = () => {
  return (
    <>
      <div>
        <h3 className="text-center border text-neutral-600 px-2 py-1 shadow-sm my-2  bg-cyan-200">
          Instructor
        </h3>

        <NavLink
          to="addCourse"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <BiSolidAddToQueue className="w-5 h-5" />

          <span className="mx-4 font-medium">Add Course</span>
        </NavLink>
        <NavLink
          to="InstructorCourse"
          className={({ isActive }) =>
            `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
              isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
            }`
          }
        >
          <SiCoursera className="w-5 h-5" />

          <span className="mx-4 font-medium">Manage Course</span>
        </NavLink>
      </div>
    </>
  );
};

export default InstructorSidebar;
