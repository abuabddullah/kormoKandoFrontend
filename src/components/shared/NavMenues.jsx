import { Link, NavLink } from "react-router-dom";

const NavMenues = () => {
  return (
    <>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/tasks">Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <details>
          <summary>Contact</summary>
          <ul className="p-2">
            <li>
              <Link to="/contact">Offline</Link>
            </li>
            <li>
              <Link to="/contact">Online</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to="/features">Features</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
};

export default NavMenues;
