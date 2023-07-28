import React from "react";

const InfoCard = ({ label, description, icon: Icon }) => {
  return (
    <div className="bg-white rounded-sm shadow-md flex items-center justify-between p-4">
      <div className="w-15 h-15 p-5 rounded-full flex items-center justify-center bg-cyan-500 me-3">
        <Icon size={26} color="#F6F4EB" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-neutral-600">{label}</h3>
        <p className="text-sm text-neutral-400">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
