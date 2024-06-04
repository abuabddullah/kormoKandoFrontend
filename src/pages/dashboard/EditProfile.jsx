import { useRef } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export const token = localStorage.getItem("token");

const EditProfile = () => {
  const userData = useLoaderData();
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;

    const photo = form.proPic.value;
    const phone = form.phoneNo.value;

    const userInfo4PATCH = {
      name,
      photo,
      phone,
      email: userData?.email,
    };

    fetch(`http://localhost:5000/api/v1/users/${userData?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo4PATCH),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount === 1) {
          toast.success("🦄 Profile Editing Successful!");
          // handleFormReset();
        }
      });
  };

  function handleFormReset() {
    formRef.current.reset();
  }
  return (
    <>
      <div className="p-8 rounded border border-gray-200 shadow-lg md:w-2/3 mx-auto my-8">
        {" "}
        <div className="text-center">
          <h1 className="font-medium text-3xl">Edit Profile</h1>{" "}
          <p className="text-gray-600 mt-6">
            Your profile is your story. Keep it updated and let it shine!
          </p>{" "}
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          {" "}
          <div className="mt-8 grid grid-cols-1 gap-4">
            {" "}
            <div>
              {" "}
              <label
                htmlFor="name"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Name
              </label>{" "}
              <input
                type="text"
                name="name"
                defaultValue={userData?.name}
                id="name"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter your name"
              />{" "}
            </div>{" "}
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
                htmlFor="phoneNo"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Phone Number
              </label>{" "}
              <input
                type="text"
                name="phoneNo"
                id="phoneNo"
                defaultValue={userData?.phone}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(+880-1XXXXXXXXX)"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="proPic"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Profile Pic
              </label>{" "}
              <input
                type="text"
                name="proPic"
                id="proPic"
                defaultValue={userData?.photo}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="(ex. https://www.example.com/your-image.jpg)"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Edit
            </button>
            <button
              onClick={() => handleFormReset()}
              className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50"
            >
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </>
  );
};

export default EditProfile;
