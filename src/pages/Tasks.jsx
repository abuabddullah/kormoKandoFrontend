import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.config";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import TaskCard from "../components/tasks/TaskCard";
import loadingImg from "./../assets/dataloading.gif";
import Pagination from "./shared/Pagination";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    // Fetch tasks from the API
    fetch("https://kormokandoserver.onrender.com/api/v1/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setFilteredTasks(data);
      });
  }, []);

  useEffect(() => {
    // Filter tasks based on the search keyword and selected priority
    const filtered = tasks.filter((task) => {
      const lowerCaseKeyword = searchKeyword.toLowerCase();
      const matchesKeyword =
        task.title.toLowerCase().includes(lowerCaseKeyword) ||
        task.description.toLowerCase().includes(lowerCaseKeyword);
      const matchesPriority =
        selectedPriority === "All" || task.priority === selectedPriority;
      return matchesKeyword && matchesPriority;
    });
    setFilteredTasks(filtered);
  }, [searchKeyword, selectedPriority, tasks]);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <section className="text-gray-600 body-font">
        <h1 className="text-2xl font-bold text-center">All Tasks</h1>
        <div className="p-6 md:w-2/3 mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="flex-grow py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search By Title or Description"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <select
            className="flex-shrink-0 py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap gap-5 -m-4 justify-center">
            {
              // if no task show loadingImg with full page else show tasks
              filteredTasks.length === 0 ? (
                <img
                  src={loadingImg}
                  alt="loading"
                  className="w-1/2 h-1/2 mx-auto"
                />
              ) : (
                filteredTasks.map((task) => (
                  <TaskCard key={task._id} task={task} />
                ))
              )
            }
          </div>
        </div>

        <Pagination />
      </section>
    </>
  );
};

export default Tasks;
