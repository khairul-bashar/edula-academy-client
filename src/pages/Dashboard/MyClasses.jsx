import React from "react";
import Heading from "../../components/shared/Heading/Heading";
import useCart from "../../hooks/useCart";
import { AiOutlineDelete } from "react-icons/ai";
import { FaAmazonPay } from "react-icons/fa";

const MyClasses = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-center items-center">
          <Heading title="My total selected  class :" primary />
          <h2 className="text-3xl font-bold text-neutral-500 ms-4">
            {cart.length}
          </h2>
        </div>
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-2 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded overflow-hidden">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
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
                      <tr>
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
                          <button className="btn btn-sm btn-outline btn-primary">
                            <AiOutlineDelete />
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-outline btn-sm btn-primary">
                            <FaAmazonPay /> Pay
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyClasses;
