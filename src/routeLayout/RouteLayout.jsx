import { Route, Routes } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import GenerateImage from "../pages/GenerateImage/GenerateImage";
import Register from "../pages/Register/Register";
import PrivateRoute from "./routes/PrivateRoute/PrivateRoute";
import AllGeneratedImages from "../pages/AllGeneratedImage/AllGeneratedImages";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/allImages"
          element={<AllGeneratedImages></AllGeneratedImages>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/generateImage"
          element={
            <PrivateRoute>
              <GenerateImage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RouteLayout;
