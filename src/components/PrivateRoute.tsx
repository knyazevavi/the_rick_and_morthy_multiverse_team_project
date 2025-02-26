import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";

export const PrivateRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.signin} />;
};
