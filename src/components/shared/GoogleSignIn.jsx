import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const GoogleSignIn = () => {
  const {
    signInWithGoogle, setLoading, loading
  } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    

  // Handle google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
        .then(result => {
          const loggedUser = result.user;
        console.log(loggedUser);
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          image: loggedUser.photoURL,

        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true })
          });
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
        toast.error(err.message);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
    >
      <FcGoogle size={32} />

      <p>Continue with Google</p>
    </div>
  );
};

export default GoogleSignIn;
