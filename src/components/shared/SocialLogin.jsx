import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { auth } from "../../../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  console.log("form socaillogin")
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
