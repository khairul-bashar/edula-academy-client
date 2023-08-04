import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
// import Title from "../../components/Title/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import Heading from "../../../components/shared/Heading/Heading";
const ImgKey = "7a94752decad5225cc386ba202e13d5e";

// console.log(ImgKey);

const AddCourse = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const ImgHostingURL = `https://api.imgbb.com/1/upload?key=${ImgKey}`;
  //   console.log(ImgHostingURL);

  const [selectedOption, setSelectedOption] = useState(null);
 
  const onSubmit = (data) => {
    
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(ImgHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageURL = imgRes.data.display_url;
          const { name, price, instructor, availableSeats, description,rating, lesson} = data;

          const newItem = {
            course_name: name,
            course_details: description,
            price: price,
            rating: rating,
            lesson: lesson,
            author_name: instructor,
            author_image: user?.photoURL,
            author_email: user?.email,
            availableSeats: availableSeats,
            image: imageURL,
            status: "pending",
            category: selectedOption.value,
          };
          // console.log(newItem);
          axiosSecure.post("/instructorClasses", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Your Class has been Added SuccessFully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  // Category selection
  

  const options = [
    { value: "popular", label: "popular" },
    { value: "mobile photography", label: "mobile photography" },
    { value: "cinematography", label: "cinematography" },
    { value: "photography", label: "photography" },
  ];

  return (
    <div className="w-full px-10 h-screen">
      <Heading title="Add Course" center />

      {/* form ar kaj baj  */}
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4">
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Course Name*</span>
          </label>
          <input
            type="text"
            placeholder="Course Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Name"
            defaultValue={user?.displayName}
            readOnly
            {...register("instructor", { required: true, maxLength: 80 })}
            // defaultValue

            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="email"
            placeholder="Instructor Email "
            {...register("email", { required: true })}
            defaultValue={user?.email}
            readOnly
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full">
          <span className="block font-bold">Sub-Category</span>
          <CreatableSelect
            className="w-full py-5"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Price "
            {...register("price", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Available Seats*</span>
          </label>
          <input
            type="number"
            placeholder="availableSeats "
            {...register("availableSeats", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold"> Rating *</span>
          </label>
          <input
            type="number"
            placeholder="rating "
            {...register("rating", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold"> Lesson *</span>
          </label>
          <input
            type="number"
            placeholder="lesson "
            {...register("lesson", { required: true })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full pb-12 ">
          <label className="label">
            <span className="label-text font-semibold">Course Image </span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Course Description</span>
          </label>
          <textarea
            type="text"
            {...register("description", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Description"
          ></textarea>
        </div>

        {/*       
        <input className="btn btn-warning btn-sm mt-4 mb-5 " type="submit" value="Add Item" /> */}

        <div className="flex justify-center">
          <button className="btn btn-warning w-1/2"> Add Class</button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
