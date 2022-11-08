import "./Header.css"

import { Navbar } from "../Navbar/Navbar.jsx";

export function Header() {
  return (
    <div className="Header">
      <div className="Head">
        <h1>Laboratorio Petrográfico</h1>
        <p>Universidad Nacional de Colombia</p>
        <p>Sede Medellin</p>
      </div>
      <Navbar />
    </div>
  );
}
