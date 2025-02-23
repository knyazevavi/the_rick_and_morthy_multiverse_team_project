import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = () => (next) => (action) => {
  // console.log("Dispatch", action)
  const result = next(action);
  // console.log("Update state", result)
  return result;
};
