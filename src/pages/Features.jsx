import React from "react";

const Features = () => {
  return (
    <>
      <div className="p-8">
        {" "}
        <div className="flex felx-col items-center justify-center">
          {" "}
          <span className="rounded-full bg-indigo-500 px-2 py-1 text-white uppercase text-sm">
            {" "}
            Features{" "}
          </span>{" "}
        </div>{" "}
        <h1 className="text-4xl font-medium text-gray-700 text-center mt-6">
          {" "}
          Commitments for Your <span className="font-bold">
            KORMOKANDO
          </span>{" "}
        </h1>{" "}
        <p className="text-center mt-6 text-lg font-light text-gray-500">
          {" "}
          At KORMOKANDO, we prioritize your security. Our platform uses JWT
          authentication to ensure your data is safe and only accessible to you.
          With options for traditional signup and login, as well as OAuth
          integration with Google and Facebook, getting started is both secure
          and convenient.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {" "}
        <div className="p-8">
          {" "}
          <div className="bg-indigo-100 rounded-full w-16 h-16 flex justify-center items-center text-indigo-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-indigo-500 font-medium mb-3">
            {" "}
            Personalized Profile Management{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            Your profile is your personal space on KORMOKANDO. Easily update
            your name, profile picture, and other personal details. Keep your
            profile current and let it reflect who you are. Our user-friendly
            interface makes editing your profile a breeze.{" "}
          </p>{" "}
        </div>{" "}
        <div className="p-8">
          {" "}
          <div className="bg-green-100 rounded-full w-16 h-16 flex justify-center items-center text-green-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-green-500 font-medium mb-3">
            {" "}
            Comprehensive Task Management{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            Stay on top of your tasks with our robust task management features.
            Create new tasks, view existing ones, and organize them to fit your
            workflow. Our intuitive design ensures that you can manage your
            tasks efficiently and effectively.{" "}
          </p>{" "}
        </div>{" "}
        <div className="p-8">
          {" "}
          <div className="bg-red-100 rounded-full w-16 h-16 flex justify-center items-center text-red-500 shadow-2xl">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {" "}
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />{" "}
            </svg>{" "}
          </div>{" "}
          <h2 className="uppercase mt-6 text-red-500 font-medium mb-3">
            {" "}
            Powerful Search and Filtering{" "}
          </h2>{" "}
          <p className="font-light text-sm text-gray-500 mb-3">
            {" "}
            Find exactly what you're looking for with our advanced search and
            filtering options. Whether you're searching for a specific task or
            filtering tasks by category, our search functionality is designed to
            help you find information quickly and effortlessly.{" "}
          </p>{" "}
        </div>
      </div>
    </>
  );
};

export default Features;
