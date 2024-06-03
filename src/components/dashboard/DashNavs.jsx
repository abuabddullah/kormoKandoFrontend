import React from "react";
import { Link } from "react-router-dom";

const DashNavs = () => {
  return (
    <>
      <li>
        <Link to="/dashboard">Profile</Link>
      </li>
      <li>
        <Link  to="/dashboard/addTask">Add Tasks</Link>
      </li>
      <li>
        <Link  to="/dashboard/manageTask">Manage Tasks</Link>
      </li>
    </>
  );
};

export default DashNavs;
