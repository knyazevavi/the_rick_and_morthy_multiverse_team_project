import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks.ts";

const PrivateRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
