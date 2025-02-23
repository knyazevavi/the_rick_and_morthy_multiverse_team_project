import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState } from "../shared/constants/constants";

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    signin: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isAuthenticated = true;
      //todo
      // localStorage.setItem("user", JSON.stringify(state));
    },
    signout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
      //todo
      // localStorage.removeItem("user");
    },
  },
});

export const { signin, signout } = userSlice.actions;
export default userSlice.reducer;
