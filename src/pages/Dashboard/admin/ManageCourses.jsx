import React from "react";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/shared/Heading/Heading";
import { AiOutlineDelete } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageCourses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: allCourses = [], refetch } = useQuery(
      ["allCourses"],
      async () => {
        const res = await axiosSecure.get("/allCourses");
        return res.data;
      }
    );

  const handleApproved = (course) => {
    fetch(`http://localhost:3000/allCourses/approved/${course._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${course.course_name} is approved!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

    
  return (
    <div>
      <div>
        {/* <Heading title={`Total Course: ${users.length}`} center primary /> */}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Course Name</th>
              <th>Author Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allCourses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={course.author_image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{course.course_name}</td>
                <td>{course.author_name}</td>
                <td>{course.author_email}</td>
                <td className="text-center">
                  {course.status === "pending" ? (
                    <h3 className="btn btn-outline btn-sm btn-primary me-3">
                      pending
                    </h3>
                  ) : (
                    <button
                      disabled
                      // onClick={() => handleMakeInstructor(course)}
                      className="btn btn-outline btn-sm btn-ghost disabled me-3"
                    >
                      approved
                    </button>
                  )}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleApproved(course)}
                    className="btn btn-sm btn-outline btn-primary me-2"
                  >
                    approve
                  </button>
                  <button
                    onClick={() => handleDelete()}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCourses;
