import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [userInfo, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      const userData = {
        name: userInfo?.displayName,
        email: userInfo?.email,
        photo: userInfo?.photoURL,
      };
      fetch("https://kormo-kando-server.vercel.app/api/v1/users", {
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
  }, [userInfo, navigate, from, userLoading]);
  return (
    <div>
      <div className="flex items-center justify-center space-x-4 mt-3">
        <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
          <FaFacebook className="w-6 h-6 mr-3 text-indigo-500 " />
          Facebook
        </button>
        <button
          onClick={() => signInWithGoogle()}
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
