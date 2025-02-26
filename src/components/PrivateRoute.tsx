import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";
import { selectUser } from "../store/selectors/userSelectors.ts";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAppSelector(selectUser);

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.signin} />;
};
