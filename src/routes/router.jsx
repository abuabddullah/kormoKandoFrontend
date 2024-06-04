import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tasks from "../pages/Tasks";
import TasksDetails from "../pages/TasksDetails";
import AddTask from "../pages/dashboard/AddTask";
import EditPassword from "../pages/dashboard/EditPassword";
import EditProfile from "../pages/dashboard/EditProfile";
import EditTask from "../pages/dashboard/EditTask";
import ManageTask from "../pages/dashboard/ManageTask";
import Profile from "../pages/dashboard/Profile";
import ErrorPage from "../pages/shared/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/tasks", element: <Tasks /> },
      {
        path: "/taskDetails/:id",
        element: <TasksDetails />,
        loader: ({ params }) =>
          fetch(`https://kormokandoserver.onrender.com/api/v1/tasks/${params.id}`),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/features", element: <Features /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  // create path for Dashboard
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: "/dashboard/editProfile/:id",
        element: <EditProfile />,
        loader: ({ params }) =>
          fetch(`https://kormokandoserver.onrender.com/api/v1/users/get/${params.id}`),
      },
      {
        path: "/dashboard/editPassword",
        element: <EditPassword />,
      },
      {
        path: "/dashboard/addTask",
        element: <AddTask />,
      },
      {
        path: "/dashboard/manageTask",
        element: <ManageTask />,
      },
      {
        path: "/dashboard/editTask/:id",
        element: <EditTask />,
      },
    ],
  },
]);
