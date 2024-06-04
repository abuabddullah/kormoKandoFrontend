import React, { useState } from "react";
import task5 from "./../assets/task5.jpg";
import { useLoaderData } from "react-router-dom";
import CountdownTimer from "../components/tasksDetails/CountdownTimer";

const TasksDetails = () => {
  const [leftTime, setLeftTime] = useState(0);
  const task = useLoaderData();

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={task5}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {task?.title}
            </h1>
            <p className="mb-8 leading-relaxed">{task?.description}</p>
            <div className="grid grid-rows-2 justify-items-center pb-6">
              <div className="badge badge-accent badge-outline mb-8">
                Priority: {task?.priority}{" "}
              </div>
              <div className="btn">
                Deadline
                <div className="badge badge-warning">{task?.deadline}</div>
              </div>
              <div>
                <CountdownTimer deadline={task?.deadline} />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Done
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Pause
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TasksDetails;
