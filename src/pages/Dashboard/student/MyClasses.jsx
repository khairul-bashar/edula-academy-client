import React from "react";
import Heading from "../../../components/shared/Heading/Heading";
import useCart from "../../../hooks/useCart";
import { AiOutlineDelete } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../../../components/shared/Loader";
import EmptyState from "../../../components/shared/EmtyState";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [cart,refetch, isLoading] = useCart();
  // console.log(cart);

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
         fetch(`http://localhost:3000/carts/${item._id}`, {
           method: "DELETE",
         })
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
  
   
  
  const handlePayment = item => {
    const price = item.price;
    localStorage.setItem("price", price);
  }
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center items-center">
          <Heading title="My total selected  class :" primary />
          <h2 className="text-3xl font-bold text-neutral-500 ms-4">
            {cart.length}
          </h2>
        </div>

        {isLoading && <Loader />}
        {cart && Array.isArray(cart) && cart.length > 0 ? (
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="text-base">
                        <th>#</th>
                        <th>Image</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th>Pay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => (
                        <tr key={item._id}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </td>
                          <td>{item.course_name}</td>
                          <td>Jankar Mahmub</td>
                          <td>{item.price}</td>
                          <td>
                            <button
                              onClick={() => handleDelete(item)}
                              className="btn btn-sm btn-outline btn-primary"
                            >
                              <AiOutlineDelete />
                            </button>
                          </td>
                          <td>
                            <Link to="/dashboard/payment">
                              <button onClick={()=>handlePayment(item)} className="btn btn-outline btn-sm btn-primary">
                                <FaAmazonPay /> Pay
                              </button>
                            </Link>
                          </td>
                        </tr>
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

export default MyClasses;
