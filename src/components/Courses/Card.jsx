// import HeartButton from "../Button/HeartButton";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useState } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Card = ({ course, selected, userRole }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [disabled, setDisabled] = useState(false);

  const {
    _id,
    course_name,
    image,
    course_details,
    price,
    author_image,
    author_name,
    rating,
    lesson,
    cartItemId,
    availableSeats
  } = course;

  const handleEnrolled = async (id) => {
    const enrolledClass = {
      classId: _id,
      price: parseFloat(price),
      course_name,
      email: user?.email,
      image,
    };

    if (user) {
      await axiosSecure
        .put(`/enrolled/${id}`, enrolledClass)
        .then(async (data) => {
          if (data.data) {
            setDisabled(true);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Complete payment for confirm !",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }

    if (!user) {
      Swal.fire({
        title: "Please Sign in for enroll class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8C9333",
        cancelButtonColor: "#d336",
        confirmButtonText: "Sign in",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signUp", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col md:flex-row bg-white p-4 rounded-sm shadow-md gap-3 w-full h-[300px]">
        <div
          className="
            aspect-square 
            w-fit
            md:w-1/2
            relative 
            overflow-hidden 
            rounded-sm
          "
        >
          <img
            className="
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            "
            src={image}
          />
          <div
            className="
            absolute
            top-3
            right-3
          "
          ></div>
        </div>

        <div className="w-fit md:w-3/5 flex flex-col">
          <div className="flex-1">
            <h2 className="text-lg font-medium">{course_name}</h2>
            <p className="text-slate-500 text-sm my-4">
              {course_details}.........
            </p>
          </div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full"
                src={author_image}
                alt=""
              />
              <h2 className="text-xs ms-2">{author_name}</h2>
            </div>
            <div className=" flex items-center justify-center gap-2">
              <div className="bg-cyan-400  w-6 h-6 rounded-full flex items-center justify-center">
                <BsFillPlayCircleFill size={20} />
              </div>
              <span className="text-xs text-neutral-500">{lesson} Lessons</span>
            </div>
          </div>

          <hr />
          <div className="flex items-center justify-between mt-4">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <button
              disabled={
                userRole === "admin" ||
                userRole === "instructor" ||
                availableSeats == 0 ||
                disabled
              }
              onClick={() => handleEnrolled(_id)}
              className="bg-cyan-400 text-white py-2 px-3 rounded-md hover:bg-primary hover:text-neutral-100 transition-all flex items-center justify-center disabled:bg-neutral-600"
            >
              Enroll Now
              <HiOutlineArrowLongRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
