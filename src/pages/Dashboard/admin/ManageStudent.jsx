import React from "react";
import { useQuery } from "@tanstack/react-query";
import Heading from "../../../components/shared/Heading/Heading";
import { AiOutlineDelete } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageStudent = () => {
   const [axiosSecure] = useAxiosSecure();
   const { data: users = [], refetch } = useQuery(["users"], async () => {
     const res = await axiosSecure.get("/users");
     return res.data;
   });

  const handleDelete = (user) => {};
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:3000/users/admin/${user._id}`, {
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
            title: `${user.name} is an Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };


  // handleMakeInstructor
  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:3000/users/instructor/${user._id}`, {
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
            title: `${user.name} is an Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div>
        <Heading title={`Total Students: ${users.length}`} center primary />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={user.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.role === "instructor" ? (
                    <button className="btn btn-outline btn-sm btn-primary me-3">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-outline btn-sm btn-primary me-3"
                    >
                      <GiTeacher />
                    </button>
                  )}
                  {user.role === "admin" ? (
                    <button className="btn btn-outline btn-sm btn-primary">
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-outline btn-sm btn-primary"
                    >
                      <RiAdminFill />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
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

export default ManageStudent;
