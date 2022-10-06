// Modules.
import { NavLink } from "react-router-dom";

// CSS.
import "./Navbar.css";

// Functions.
export function Navbar() {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/"
        end
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}
