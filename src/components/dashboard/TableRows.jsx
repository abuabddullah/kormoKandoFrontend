import toast from "react-hot-toast";
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import task5 from "./../../assets/task5.jpg";


export const token = localStorage.getItem("token");

const TableRows = ({ task, tasks, setTasks }) => {
  const navigate = useNavigate();
  // delete task including token in the header
  const handleDelete = (id) => {
    const isProceed = confirm("Are you sure you want to delete this task?");
    if (isProceed) {
      console.log(token);
      fetch(`http://localhost:5000/api/v1/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount === 1) {
            toast.success("🦄 Task Deleted Successfully!");
            const newTasks = tasks.filter((task) => task._id !== id);
            setTasks(newTasks);
          }
        }); 
    } else {
      alert("Ok! no issues");
    }
  };
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            type="checkbox"
            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />

          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={task5}
              alt="task5"
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {task?.title}
              </h2>
              <p className="text-sm font-normal text-gray-600 dark:text-gray-400">
                {task?.description.length > 10
                  ? task?.description.substring(0, 10) + "..."
                  : task?.description}
              </p>
            </div>
          </div>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

          <h2 className="text-sm font-normal text-emerald-500">
            {task?.priority}{" "}
          </h2>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {task?.deadline}{" "}
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {task?.email}{" "}
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => handleDelete(task._id)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
          >
            <AiOutlineDelete />
          </button>

          <button
            onClick={() => navigate(`/dashboard/editTask/id`)}
            className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
          >
            <AiFillEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRows;
