import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import { NavigationButtonTypes } from "./../shared/types/storiesTypes.ts";
import { NavigationButton } from "./../shared/ui/NavigationButton.tsx";

const meta: NavigationButtonTypes["Meta"] = {
  title: "Buttons/NavigationButton",
  component: NavigationButton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const ButtonState = (
  args: Partial<{
    title: string;
    params: string;
    onClick: () => void;
  }>,
) => {
  const [title, setTitle] = useState(args.title ?? "Default Button");

  return (
    <NavigationButton
      title={title}
      params={args.title ?? "/"}
      onClick={() => {
        setTitle("Clicked!");
        setTimeout(() => setTitle("Button"), 2000);
      }}
    />
  );
};

export const Primary: NavigationButtonTypes["Story"] = {
  name: "Default",
  args: {
    title: "Button",
    params: "/",
  },
};

export const Secondary: NavigationButtonTypes["Story"] = {
  name: "Click",
  args: {
    title: "Button",
    params: "/",
  },
  render: ButtonState,
};

export default meta;
