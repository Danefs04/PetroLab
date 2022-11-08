// Modules.
import { NavLink } from "react-router-dom";

// CSS.
import "./Navbar.css";

// Functions.
export function Navbar() {
  return (
    <div>
      <div className="line"></div>
      <nav className="Navbar">
        <div className="NavHolder">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/"
            end
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/about"
          >
            Sobre el laboratorio
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/thinsections"
          >
            Secciones delgadas
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/handsamples"
          >
            Muestras de mano
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/outcrops"
          >
            Afloramientos
          </NavLink>
        </div>
      </nav>
      <div className="line"></div>
    </div>
  );
}
