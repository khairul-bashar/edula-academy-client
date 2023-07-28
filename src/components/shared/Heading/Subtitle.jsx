import React from 'react';
import {BsThreeDots} from 'react-icons/bs'
 
const Subtitle = ({label, center}) => {
    return (
      <div className={`relative w-fit text-sky-400 ${center ? "mx-auto" : ""}`}>
        <span className=" text-sm ">{label}</span>

        <BsThreeDots
          size={24}
          className="
              absolute
              top-1/2 -right-6 transform translate-x-1/2 -translate-y-1/2
            "
        />
      </div>
    );
};

export default Subtitle;