import { Route, Routes } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home/Home";

const RouteLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Root></Root>}>
        <Route index element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
};

export default RouteLayout;
