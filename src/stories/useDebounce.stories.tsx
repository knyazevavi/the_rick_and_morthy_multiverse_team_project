import { UseDebounceWrapper } from "../components/UseDebounceWrapper.tsx";
import { UseDebounceTypes } from "./../shared/types/storiesTypes.ts";

const meta: UseDebounceTypes["Meta"] = {
  title: "Hooks/useDebounce",
  component: UseDebounceWrapper,
  tags: ["autodocs"],
};

export const Primary: UseDebounceTypes["Story"] = {
  name: "Short",
  args: {
    value: "",
    delay: 500,
  },
};

export const Secondary: UseDebounceTypes["Story"] = {
  name: "Medium",
  args: {
    value: "",
    delay: 1000,
  },
};

export const Third: UseDebounceTypes["Story"] = {
  name: "Large",
  args: {
    value: "",
    delay: 1500,
  },
};

export default meta;
