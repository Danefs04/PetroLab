//
import { Outlet } from "react-router-dom";

// Functions.
export function ThinSectionPage() {
  return (
    <div>
      <Outlet />
      <div className="Body">
        <h2>Coleccion de secciones delgadas</h2>
        <p>Descubre nuestra coleccion de muestras de minerales en seccion delgada.</p> 
      </div>
    </div>
  );
}
