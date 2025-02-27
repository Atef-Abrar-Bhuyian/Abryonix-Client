import { Route, Routes } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import GenerateImage from "../pages/GenerateImage/GenerateImage";
import Register from "../pages/Register/Register";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import AllGeneratedImages from "../pages/AllGeneratedImage/AllGeneratedImages";
import SingleImage from "../pages/SingleImage/SingleImage";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/allImages" element={<AllGeneratedImages />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/generateImage"
          element={
            <PrivateRoute>
              <GenerateImage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/singleImage/:id"
          element={
            <PrivateRoute>
              <SingleImage />
            </PrivateRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

export default RouteLayout;
