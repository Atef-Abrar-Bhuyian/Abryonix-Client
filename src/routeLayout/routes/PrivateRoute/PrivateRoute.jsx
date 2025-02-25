import { Navigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
