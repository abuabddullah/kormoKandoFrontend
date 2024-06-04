import { useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.config";
import axios from "axios";
import { token } from "./EditProfile";
import toast from "react-hot-toast";

const AddTask = () => {
  const formRef = useRef(null);
  const [user] = useAuthState(auth);

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    const isProceed = confirm("Are you sure wanna create a new recipe?");
    if (isProceed) {
      const form = e.target;

      // get the value from the form
      const email = form.email.value;
      const title = form.taskTitle.value;
      const priority = form.taskPriority.value;
      const deadline = form.taskDeadline.value;
      const description = form.taskDescription.value;

      const taskData = {
        email,
        title,
        priority,
        deadline,
        description,
      };

      fetch(`http://localhost:5000/api/v1/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(taskData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.insertedId) {
            toast.success("🦄 Task Adding Successful!");
            formRef.current.reset();
          }
        });
    } else {
      alert("Ok! no issues");
    }
  };
  return (
    <>
      <div className="p-8 rounded border border-gray-200 shadow-lg md:w-2/3 mx-auto my-8">
        {" "}
        <div className="text-center">
          <h1 className="font-medium text-3xl">Add Task</h1>{" "}
          <p className="text-gray-600 mt-6">
            Add tasks to achieve goals, one step at a time.
          </p>{" "}
        </div>
        <form ref={formRef} onSubmit={handleCreateRecipe}>
          {" "}
          <div className="mt-8 grid grid-cols-1 gap-4">
            {" "}
            <div>
              {" "}
              <label
                htmlFor="email"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Creating By
              </label>{" "}
              <input
                type="text"
                name="email"
                id="email"
                defaultValue={user.email}
                disabled
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="yourmail@provider.com"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="taskTitle"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Task Title
              </label>{" "}
              <input
                type="text"
                name="taskTitle"
                id="taskTitle"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Title"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="taskPriority"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Task Priority*
              </label>{" "}
              <select
                id="taskPriority"
                name="taskPriority"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              >
                <option className=" hidden">Select Category</option>
                <option>High</option>
                <option>Normal</option>
                <option>Low</option>
              </select>
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="taskDeadline"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Task Deadline
              </label>{" "}
              <input
                type="date"
                name="taskDeadline"
                id="taskDeadline"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label
                htmlFor="taskDescription"
                className="text-sm text-gray-700 block mb-1 font-medium"
              >
                Task Description
              </label>{" "}
              <textarea
                name="taskDescription"
                id="taskDescription"
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                placeholder="Enter Description"
              ></textarea>{" "}
            </div>{" "}
          </div>{" "}
          <div className="space-x-4 mt-8">
            {" "}
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
            >
              Add
            </button>
          </div>{" "}
        </form>{" "}
      </div>
    </>
  );
};

export default AddTask;
