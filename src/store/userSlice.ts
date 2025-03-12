import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { STORE_KEYS } from "../shared/constants/constants";
import { userInitialState } from "../shared/constants/constants";
import { userRegistrationPayload } from "../shared/types/types.ts";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem(STORE_KEYS.USER, JSON.stringify(state));
    },

    signup: (state, action: PayloadAction<userRegistrationPayload>) => {
      const { email, username } = action.payload;

      if (email) {
        state.username = username;
        state.isAuthenticated = true;
        localStorage.setItem(
          email,
          JSON.stringify({ ...action.payload, isAuthenticated: true }),
        );
      }
    },
    signout: (state) => {
      state.username = "";
      state.isAuthenticated = false;
      localStorage.removeItem(STORE_KEYS.USER);
    },
  },
});

export const { signin, signout, signup } = userSlice.actions;
export default userSlice.reducer;
