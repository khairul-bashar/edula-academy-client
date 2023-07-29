import React from 'react';

const TeacherCard = ({teacher}) => {
    const { image_link, name, email, teacher_type } = teacher;
    return (
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col bg-white p-4 rounded-sm shadow-md gap-3 w-full">
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
              h-full 
              w-full 
              group-hover:scale-110 
              transition
              rounded-md
              shadow-lg
            "
              src={image_link}
              alt="Teacher"
            />
          </div>

          <div className="w-fit text-center">
                    <h2 className="text-lg font-medium">{name}</h2>
            <p className="text-slate-500 text-xs">
               {teacher_type}
            </p>
            <p className="text-slate-500 text-sm my-4">
              Email: {email}
            </p>

            
          </div>
        </div>
      </div>
    );
};

export default TeacherCard;