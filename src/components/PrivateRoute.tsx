import { Navigate } from "react-router-dom";

import { LazyOutlet } from "./LazyOutlet";
import { useAppSelector } from "../hooks.ts";
import { PATH } from "../shared/constants/constants.ts";
import { selectUser } from "../store/selectors/userSelectors.ts";

export const PrivateRoute = () => {
  const { isAuthenticated } = useAppSelector(selectUser);

  return isAuthenticated ? <LazyOutlet /> : <Navigate to={PATH.signin} />;
};
