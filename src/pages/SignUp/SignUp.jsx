import { Link, useFormAction, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef } from "react";
import { ImSpinner3 } from "react-icons/im";
import { AuthContext } from "../../Providers/AuthProvider";
import login2 from "../../assets/Images/login2.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    loading,
    setLoading,
    signInWithGoogle,
    createUser,
    updateUserProfile,
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


   const {
     register,
     handleSubmit,
     formState: { errors },
     watch,
     reset,
   } = useForm();


  // Handle user registration
  const onSubmit = async (data) => {

    console.log(data);
    const {
      name,
      email,
      password
    } = data;

    
    

    // Image Upload
    const image = data.image[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const imageUrl = imageData.data.display_url;

        createUser(email, password)
          .then((result) => {
            console.log(result);
            updateUserProfile(name, imageUrl)
              .then(() => {
                const saveUser = { name: data.name, email: data.email, image: imageUrl};
                fetch("http://localhost:3000/users", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(saveUser),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data.insertedId) {
                      reset();
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User created successfully.",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                      navigate(from, { replace: true });
                    }
                  });
              })
              .catch((err) => {
                setLoading(false);
                console.log(err.message);
                toast.error(err.message);
              });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });

    return;
  };

  // Handle google signin
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
             position: "center",
             icon: "success",
             title: "User Login successfully!!!.",
             showConfirmButton: false,
             timer: 1500,
           });
        navigate(from, { replace: true });
      })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          toast.error(err.message);
        });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat bg-[url('../src/assets/Images/bg_image.svg')] p-4">
      <div>
        <img src={login2} alt="" />
      </div>
      <div className="flex flex-col max-w-md p-3 rounded-md sm:p-5 bg-transparent text-white border">
        <div className="mb-2 text-center">
          <h1 className="my-1 text-4xl font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Image:
              </label>
              <input
                required
                type="file"
                {...register("image", { required: true })}
                accept="image/*"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                required
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-rose-500 w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner3 className="m-auto animate-spin" size={24} />
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-neutral-200"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
