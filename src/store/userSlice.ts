import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState } from "../shared/constants/constants";
import { STORE_KEYS } from "../shared/constants/constants";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(STORE_KEYS.USER, JSON.stringify(state));
    },
    signout: (state) => {
      state.username = "";
      state.isAuthenticated = false;
      localStorage.removeItem(STORE_KEYS.USER);
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
