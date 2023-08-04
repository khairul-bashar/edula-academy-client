// import HeartButton from "../Button/HeartButton";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Swal from "sweetalert2";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AuthContext } from "../../Providers/AuthProvider";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

const Card = ({ course, selected }) => {

  const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

  const {
    _id,
    course_name,
    image,
    course_details,
    price,
    author_image,
    rating,
    lesson,
    cartItemId
  } = course;


 const handleAddToCart = (course) => {
  //  console.log(course);
   if (user && user.email) {
     const cartItem = {
       cartItemId: _id,
       course_name,
       image,
       price,
       email: user.email,
     };
     fetch("http://localhost:3000/carts", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(cartItem),
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.insertedId) {
           refetch(); // refetch cart to update the number of items in the cart
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Complete payment for confirm!!!.",
             showConfirmButton: false,
             timer: 1500,
           });
         }
       });
   } else {
     Swal.fire({
       title: "Please login to order the food",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Login now!",
     }).then((result) => {
       if (result.isConfirmed) {
         navigate("/login", { state: { from: location } });
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
            <img className="w-10 h-10 rounded-full" src={author_image} alt="" />
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
              disabled={selected?.includes(_id)}
              onClick={() => handleAddToCart(course)}
              className="bg-cyan-400 text-white py-2 px-3 rounded-md hover:bg-primary hover:text-neutral-100 transition-all flex items-center justify-center disabled:btn-neutral"
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
