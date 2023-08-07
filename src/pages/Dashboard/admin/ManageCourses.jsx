import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Helmet } from "react-helmet-async";
import { AiOutlineDelete } from "react-icons/ai";
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
    fetch(
      `https://summer-camp-server-ten-sigma.vercel.app/allCourses/approved/${course._id}`,
      {
        method: "PATCH",
      }
    )
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


  const handleDelete = (item) => {
    console.log(item);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://summer-camp-server-ten-sigma.vercel.app/courses/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
    
  return (
    <div>
      <div>
        <Helmet>
          <title>Edula | Manage Course</title>
        </Helmet>
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
                <td className="text-center flex items-center justify-center">
                  <button
                    onClick={() => handleApproved(course)}
                    className="btn btn-sm btn-outline btn-primary me-2"
                  >
                    approve
                  </button>
                  <button
                    onClick={() => handleDelete(course)}
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
