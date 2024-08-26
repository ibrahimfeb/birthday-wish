import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./assets/styles/global.css";
import "./assets/styles/animate.css";
import "./assets/styles/LineIcons.css"
import "./assets/styles/bootstrap.min.css"
import "./assets/styles/default.css"
import "./assets/styles/style.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
