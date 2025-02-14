import { Route, Routes } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Route>
    </Routes>
  );
};

export default RouteLayout;
