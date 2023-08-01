// import HeartButton from "../Button/HeartButton";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Card = ({ course }) => {
  const { course_name, image, course_details, price, author_image, rating, lesson } = course;
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col md:flex-row bg-white p-4 rounded-sm shadow-md gap-3 w-full">
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
          >
            {/* <HeartButton /> */}
          </div>
        </div>

        <div className="w-fit md:w-3/5">
          <h2 className="text-lg font-medium">{course_name}</h2>
          <p className="text-slate-500 text-sm my-4">{course_details}
          </p>
          <div className="flex items-center justify-between mb-5">
            <img
              className="w-10 h-10 rounded-full"
              src={author_image}
              alt=""
            />
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
            <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center">
              <HiOutlineArrowLongRight size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
