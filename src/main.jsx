import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LightModeProvider } from "./context/LightModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LightModeProvider>
      <App />
    </LightModeProvider>
  </React.StrictMode>
);
