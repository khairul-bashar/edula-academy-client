import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
const EmptyState = ({ message, address, label, reason }) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <h3 className="font-bold text-lg">{reason}</h3>
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>
        <Button label={label} />
      </Link>
    </div>
  );
};

export default EmptyState;
