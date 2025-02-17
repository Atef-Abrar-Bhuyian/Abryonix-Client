import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouteLayout from "./routeLayout/RouteLayout";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouteLayout></RouteLayout>
      <ToastContainer />
    </BrowserRouter>
  </StrictMode>
);
