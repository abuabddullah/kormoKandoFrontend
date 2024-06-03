import React from "react";
import { useParams } from "react-router-dom";

const EditTask = () => {
  const { id } = useParams();
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
        <form>
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
                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
              >
                <option className=" hidden">Select Category</option>
                <option>Normal</option>
                <option>Moderate</option>
                <option>High</option>
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
              Edit
            </button>
            <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
              Cancel
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>
    </>
  );
};

export default EditTask;
