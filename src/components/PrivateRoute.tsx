import { Navigate, Outlet } from "react-router-dom";

import { PATH } from "../shared/constants/constants.ts";
import { selectorUser } from "../store/selectors/userSelectors.ts";

export const PrivateRoute = () => {
  const { isAuthenticated } = selectorUser();

  return isAuthenticated ? <Outlet /> : <Navigate to={PATH.signin} />;
};
