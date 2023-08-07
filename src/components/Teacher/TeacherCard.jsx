import React from "react";

const TeacherCard = ({ teacher }) => {
  const { image, name, email, teacher_type } = teacher;
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-sm shadow-md gap-3 w-full h-[350px]">
        <div
          className="
            aspect-square
            w-fit
            relative 
            overflow-hidden 
            rounded-md
          "
        >
          <img
            className="
              object-cover 
              w-full 
              group-hover:scale-110 
              transition
              rounded-md
              shadow-lg
            "
            src={image}
            alt="Teacher"
          />
        </div>

        <div className="w-fit text-center">
          <p className="text-slate-500 text-xs">Instructor</p>
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="text-slate-500 text-sm my-4">Email: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
