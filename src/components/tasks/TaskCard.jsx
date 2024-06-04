import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import taskImg5 from "./../../assets/task5.jpg";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {task?.title}
          </h1>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {task?.description.length > 30
              ? task?.description.substring(0, 30) + "..."
              : task?.description}
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src={taskImg5}
          alt="task img"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-sm italic font-bold text-white">
            Priority: {task?.priority}{" "}
          </h1>

          <button onClick={()=>navigate(`/taskDetails/${task?._id}`)} className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none flex gap-3 items-center">
            Watch Details <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
