import { useAppSelector } from "../../hooks.ts";
import { RootState } from "../store.ts";

export const selectorUser = useAppSelector((state: RootState) => state.user);
