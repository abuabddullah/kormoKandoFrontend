import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import TaskCard from "../components/tasks/TaskCard";
import Pagination from "./shared/Pagination";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import { useEffect, useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    // fetching-1: inside useEffect by fetch.then.then
    fetch("http://localhost:5000/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  if (loading) return <LoadingSpinner />;
  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="text-2xl font-bold text-center">All Tasks</h1>
        <div className="p-6 md:w-2/3 mx-auto">
          <input
            type="text"
            className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search"
          />
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap gap-5 -m-4 justify-center">
            {/* {[...Array(9).keys()].map((item, index) => { */}
            {tasks.map((task, index) => {
              return (
                <>
                  <TaskCard task={task} key={index} />
                </>
              );
            })}
          </div>
        </div>

        <Pagination />
      </section>
    </>
  );
};

export default Tasks;
