import { RootState } from "../store.ts";

export const selectHistory = (state: RootState) => state.history;
