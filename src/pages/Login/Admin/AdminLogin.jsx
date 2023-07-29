import React from "react";
import avatar from "../../../assets/Images/placeholder.jpg";

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800 text-white">
      <div className="border px-7 py-9 flex flex-col items-center justify-center rounded-md shadow-xl relative">
        <div className="w-20 h-20 rounded-full bg-neutral-500 p-1 ">
          <img src={avatar} alt="" className="object-cover rounded-full" />
        </div>
        <h2 className="text-2xl font-bold my-2">Admin</h2>
        <form action="">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
