import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase.config";
import DashNavs from "../components/dashboard/DashNavs";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) return <LoadingSpinner />;

  const handleNavigate = () => {
    // if pathname contains "editRecipe" then do 1 step back or goto home
    if (location.pathname.includes("editProfile")) {
      // Option 1: Go back one step
      navigate(-1);
    } else if (location.pathname.includes("editTask")) {
      // Option 1: Go back one step
      navigate(-1);
    } else if (location.pathname.includes("editPassword")) {
      // Option 1: Go back one step
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <button onClick={handleNavigate}>🔙</button>{" "}
              <Link to="/dashboard">
                <span className="ml-3">Dashboard</span>
              </Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <DashNavs />
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
            <DashNavs />
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
