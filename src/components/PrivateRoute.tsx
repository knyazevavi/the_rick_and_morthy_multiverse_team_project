import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const isAuth = true; //TODO delete after implemented auth
  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
