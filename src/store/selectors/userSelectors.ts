import { RootState } from "../store.ts";

export const selectUser = (state: RootState) => state.user;
