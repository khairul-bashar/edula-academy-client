import { useQuery } from "@tanstack/react-query";
import React from "react";
import Swal from "sweetalert2";
import EmptyState from "../../../components/shared/EmtyState";
import Heading from "../../../components/shared/Heading/Heading";
import Loader from "../../../components/shared/Loader";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import StudentClassTable from "./StudentClassTable";

const MyEnrollClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();


  const {
    data: selectedClass = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedData"],
    queryFn: async () => {
      const res = await axiosSecure(`/enrolled?email=${user?.email}`);
      return res.data;
    },
  });

  console.log(selectedClass);

  const handleDelete = (item) => {
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
          `https://summer-camp-server-ten-sigma.vercel.app/carts/${item._id}`,
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

  const handlePayment = (item) => {
    const price = item.price;
    localStorage.setItem("price", price);
  };
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center items-center">
          <Heading title="My total selected  class :" primary />
          <h2 className="text-3xl font-bold text-neutral-500 ms-4">
            {selectedClass.length}
          </h2>
        </div>

        {isLoading && <Loader />}
        {selectedClass &&
        Array.isArray(selectedClass) &&
        selectedClass.length > 0 ? (
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedClass &&
                        selectedClass?.map((classInfo) => (
                          <StudentClassTable
                            key={classInfo._id}
                            classInfo={classInfo}
                            refetch={refetch}
                          />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          !isLoading && (
            <EmptyState
              address={"/courses"}
              label={"Enroll Now"}
              reason={"You haven't select any class yet !"}
              message={"Please click to enroll now for enroll classes"}
            />
          )
        )}
      </div>
    </>
  );
};

export default MyEnrollClasses;
