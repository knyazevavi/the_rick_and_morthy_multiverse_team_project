import { Typography } from "@mui/material";
import { Navigate } from "react-router-dom";

import { ERROR_404_URL } from "../shared/constants/constants";
import { ErrorHandlerProps } from "../shared/types/types";

export const ErrorHandler = ({ error }: ErrorHandlerProps) => {
  const apiError = error as { status?: number };

  if (apiError?.status === 404) {
    return <Navigate to={ERROR_404_URL} replace />;
  }
  return <Typography variant="h6"> Something went wrong.</Typography>;
};
