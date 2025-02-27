import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import RouteLayout from "./routeLayout/RouteLayout";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./authProvider/AuthProvider";
import 'animate.css';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RouteLayout></RouteLayout>
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
