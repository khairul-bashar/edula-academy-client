import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:3000/payments?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) =>
        setData(data.sort((a, b) => new Date(b.date) - new Date(a.date)))
      );
  }, []);

  return (
    <div className="pt-12">
      <h2 className="text-2xl pb-8">My Total Payment: {data.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-red-500 text-white">
            <tr>
              <th>#</th>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody className="bg-green-100">
            {data.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
