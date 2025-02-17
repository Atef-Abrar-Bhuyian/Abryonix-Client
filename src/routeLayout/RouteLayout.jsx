import { Route, Routes } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import GenerateImage from "../pages/GenerateImage/GenerateImage";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/generateImage" element={<GenerateImage></GenerateImage>}></Route>
      </Route>
    </Routes>
  );
};

export default RouteLayout;
