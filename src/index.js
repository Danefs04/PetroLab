import React from "react";
import ReactDOM from "react-dom/client";

// Components.
import { App } from "./App.jsx";

// Root element.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render receives only HTML. Only one element always contains the rest.
root.render(
  <div>
    <App />
  </div>
);
