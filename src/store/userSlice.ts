import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { userInitialState } from "../shared/constants/constants";
import { userRegistrationPayload } from "../shared/types/types.ts";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      if (localStorage.getItem(state.username)) {
        state.isAuthenticated = true;
      }
    },

    signup: (state, action: PayloadAction<userRegistrationPayload>) => {
      const { email, username } = action.payload;

      if (email) {
        state.username = username;
        localStorage.setItem(email, JSON.stringify(action.payload));
      }

      state.isAuthenticated = true;
    },
    signout: (state) => {
      state.username = null;

      localStorage.removeItem("user");

      state.isAuthenticated = false;
    },
  },
});

export const { signin, signout, signup } = userSlice.actions;
export default userSlice.reducer;
