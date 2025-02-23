import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { characterApi } from "../api/characterApi";
import userSlice from "./userSlice";
import historySlice from "./historySlice";
import favoriteSlice from "./favoriteSlice";
import { loggerMiddleware } from "../shared/middlewares/loggerMiddleware";

export const store = configureStore({
  reducer: {
    user: userSlice,
    history: historySlice,
    favorites: favoriteSlice,
    [characterApi.reducerPath]: characterApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(characterApi.middleware, loggerMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
