import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { token } from "./EditProfile";

const EditTask = () => {
  const { id } = useParams();
  const [taskDetails, setTaskDetails] = useState();
  const formRef = useRef(null);

  // get task by id in useEffect
  useEffect(() => {
    fetch(`https://kormokandoserver.onrender.com/api/v1/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => setTaskDetails(data));
  }, [id]);

  const handleEditTask = async (e) => {
    e.preventDefault();
    const isProceed = confirm("Are you sure wanna Edit the recipe?");
    if (isProceed) {
      const form = e.target;

      const title = form.taskTitle.value;
      const priority = form.taskPriority.value;
      const deadline = form.taskDeadline.value;
      const description = form.taskDescription.value;

      const taskData = {
        title,
        priority,
        deadline,
        description,
      };
      // fetch the task by id
      const res4EditTask = await fetch(
        `https://kormokandoserver.onrender.com/api/v1/tasks/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(taskData),
        }
      );
      const data = await res4EditTask.json();
      console.log(data);
      if (data?.modifiedCount === 1) {
        toast.success("Task Edited Successfully!!");
      }
    } else {
      alert("Ok! no issues");
    }
  };

  return (
    <>
      <div className="p-8 rounded border border-gray-200 shadow-lg md:w-2/3 mx-auto my-8">
        {" "}
        <div className="text-center">
          <h1 className="font-medium text-3xl">Edit Task</h1>{" "}
          <p className="text-gray-600 mt-6">
            Edit tasks to achieve goals, one step at a time.
          </p>{" "}
        </div>
        <form ref={formRef} onSubmit={handleEditTask}>
          {" "}
          <div className="mt-8 grid grid-cols-1 gap-4">
            {" "}
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
                defaultValue={taskDetails?.title}
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
                defaultValue={taskDetails?.priority}
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              >
                <option className=" hidden">Select Category</option>
                <option selected>High</option>
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
                defaultValue={taskDetails?.deadline}
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
                defaultValue={taskDetails?.description}
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
              Edit
            </button>
          </div>{" "}
        </form>{" "}
      </div>
    </>
  );
};

export default EditTask;
