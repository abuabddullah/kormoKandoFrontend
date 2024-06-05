import {
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  /* useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      const userData = {
        name: userInfo?.displayName,
        email: userInfo?.email,
        photo: userInfo?.photoURL,
      };
      fetch("https://kormokandoserver.onrender.com/api/v1/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data?.token);
        });
      toast.success("Login Success");
      navigate(from, { replace: true });
    }
  }, [userInfo, navigate, from, userLoading]); */

  // i want after google login the user data will be saved in the database

  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((data) => {
        console.log("firebase googleLogin done", data);
        const userData = {
          name: data.user?.displayName,
          email: data.user?.email,
          photo: data.user?.photoURL,
        };
        console.log("userData4post", userData);
        fetch("https://kormokandoserver.onrender.com/api/v1/users", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("DB post done", data);
            localStorage.setItem("token", data?.token);
            toast.success("Login Success");
            navigate(from, { replace: true });
          });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    try {
      signInWithGoogle()
        .then((data) => {
          console.log("firebase googleLogin done", data);
          const userData = {
            name: data.user?.displayName,
            email: data.user?.email,
            photo: data.user?.photoURL,
          };
          console.log("userData4post", userData);
          fetch("https://kormokandoserver.onrender.com/api/v1/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("DB post done", data);
              localStorage.setItem("token", data?.token);
              toast.success("Login Success");
              navigate(from, { replace: true });
              window.location.reload();
            });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message);
        });
    } catch (err) {
      console.error("Error updating password:", err);
      toast.error("Failed to update password");
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-3">
        <button
          onClick={handleFacebookLogin}
          className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          <FaFacebook className="w-6 h-6 mr-3 text-indigo-500 " />
          Facebook
        </button>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          <FaGoogle className="w-6 h-6 mr-3 text-indigo-500 " />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
