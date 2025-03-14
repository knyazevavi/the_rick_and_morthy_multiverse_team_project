import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";

import favoriteSlice from "./favoriteSlice";
import historySlice from "./historySlice";
import uploadFavoritesSlice from "./uploadFavoritesSlice";
import userSlice from "./userSlice";
import { characterApi } from "../api/characterApi";
import { loggerMiddleware } from "../shared/middlewares/loggerMiddleware";

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "favorites", "history"],
  blacklist: [`${[characterApi.reducerPath]}`],
};

const uploadFavoritesPersistConfig = {
  key: "uploadFavorites",
  storage: storageSession,
};

const rootReducer = combineReducers({
  user: userSlice,
  history: historySlice,
  favorites: favoriteSlice,
  [characterApi.reducerPath]: characterApi.reducer,
  uploadFavorites: persistReducer(
    uploadFavoritesPersistConfig,
    uploadFavoritesSlice,
  ),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(characterApi.middleware, loggerMiddleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
