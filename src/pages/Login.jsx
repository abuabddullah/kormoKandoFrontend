import { LuArrowLeftToLine } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../components/shared/SocialLogin";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";

const Login = () => {
  const [error, setError] = useState(null);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [userInfo, userLoading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // complete the code for handleLogin function
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmailAndPassword(email, password).catch((error) => {
      setError(error.message);
    });
  };

  useEffect(() => {
    if (userInfo) {
      toast.success("Login Success");
      navigate(from, { replace: true });
    }
  }, [userInfo, navigate, from, userLoading]);
  return (
    <>
      <div className="bg-gray-800">
        <div className="p-8 lg:w-1/2 mx-auto">
          <div className="bg-white rounded-t-lg p-8">
            <div className="flex items-center justify-between">
              <Link
                to="/home"
                className="text-gray-500 hover:text-gray-600 tooltip"
                data-tip="Go Home"
              >
                <LuArrowLeftToLine className="w-6 h-6" />
              </Link>
              <p className="text-center text-sm text-gray-400 font-light">
                Sign up with
              </p>
              <span></span>
            </div>
            <SocialLogin />
          </div>
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            <h1 className="text-2xl font-bold text-center">Login now!</h1>
            <form onSubmit={handleLogin} className="mt-6">
              <div className="relative">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="Email"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="relative mt-3">
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600 transition rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
                <div className="absolute left-0 inset-y-0 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 italic text-gray-500 font-light text-xs">
                Notes:{" "}
                {error ? (
                  <span className="text-red-500 font-bold">{error}</span>
                ) : (
                  <span className="font-bold text-green-400">All Good</span>
                )}
              </p>
              <div className="mt-4 flex items-center text-gray-500">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label className="text-sm" htmlFor="remember">
                  I agree with the{" "}
                  <a href="#" className="text-indigo-400 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div className="flex items-center justify-center mt-8">
                <button
                  type="submit"
                  className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-center text-sm text-gray-500 font-light mt-5">
              Or{" "}
              <Link to="/register" className="text-blue-600 underline">
                sign up
              </Link>{" "}
              with credentials
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
