import React from "react";

const TasksDetails = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              "Task Title"
            </h1>
            <p className="mb-8 leading-relaxed">
              "TASK DESCRIPTION_Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi quos quidem sequi illum facere recusandae
              voluptatibus"
            </p>
            <div className="grid grid-rows-2 justify-items-center pb-6">
            <div className="badge badge-accent badge-outline mb-8">
              "Top" Prior
            </div>
            <div className="btn">
              Deadline
              <div className="badge badge-warning">"01/05/2024"</div>
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
