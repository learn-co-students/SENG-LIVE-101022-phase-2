// index.js => Top Level Configuration File

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";


// Syntax Differences Due to React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Component Hierarchy => Russian Doll */}
    <App />
  </React.StrictMode>
);