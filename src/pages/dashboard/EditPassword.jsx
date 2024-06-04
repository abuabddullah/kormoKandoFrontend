import React, { Fragment, useState } from "react";
import { auth } from "../../../firebase.config";
import { useAuthState, useUpdatePassword } from "react-firebase-hooks/auth";
import LoadingSpinner from "../../components/shared/LoadingSpinner";
import toast from "react-hot-toast";

const EditPassword = () => {
  const [userData] = useAuthState(auth);
  const [password, setPassword] = useState("");
  const [updatePassword, updating, error] = useUpdatePassword(auth);
  const handleUpdatePassword = async () => {
    try {
      await updatePassword(password);
      toast.success("Password updated successfully");
    } catch (err) {
      console.error("Error updating password:", err);
      toast.error("Failed to update password");
    }
  };

  if (updating) return <LoadingSpinner />;

  return (
    <>
      <Fragment>
        <>
          <div className="p-8 rounded border border-gray-200 shadow-lg md:w-2/3 mx-auto my-8">
            {" "}
            <div className="text-center">
              <h1 className="font-medium text-3xl">Edit Password</h1>{" "}
              <p className="text-gray-600 mt-6">
                Keep your password secure and up-to-date. Use Strong Passwords.
              </p>{" "}
            </div>
            <form onSubmit={handleUpdatePassword}>
              {" "}
              <div className="mt-8 grid grid-cols-1 gap-4">
                {" "}
                <div>
                  {" "}
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    Email Adress
                  </label>{" "}
                  <input
                    type="email"
                    value={userData?.email}
                    disabled
                    name="email"
                    id="email"
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="yourmail@provider.com"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label
                    htmlFor="password"
                    className="text-sm text-gray-700 block mb-1 font-medium"
                  >
                    New Password
                  </label>{" "}
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                    id="password"
                    className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    placeholder="Enter new password"
                  />{" "}
                </div>{" "}
              </div>{" "}
              <p className="text-sm text-gray-500 mt-2">
                Forgot Password?{" "}
                <span className="text-info cursor-pointer underline">
                  Reset Password
                </span>
              </p>
              <div className="space-x-4 mt-8">
                {" "}
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                >
                  Update Password
                </button>
              </div>{" "}
            </form>{" "}
          </div>
        </>
      </Fragment>
    </>
  );
};

export default EditPassword;
