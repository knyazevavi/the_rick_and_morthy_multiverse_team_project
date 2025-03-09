import { Meta, StoryObj } from "@storybook/react";

import { UseDebounceWrapper } from "../../components/UseDebounceWrapper.tsx";
import { NavigationButton } from "../../shared/ui/NavigationButton.tsx";

export type UseDebounceTypes = {
  Meta: Meta<typeof UseDebounceWrapper>;
  Story: StoryObj<typeof UseDebounceWrapper>;
};

export type NavigationButtonTypes = {
  Meta: Meta<typeof NavigationButton>;
  Story: StoryObj<typeof NavigationButton>;
};
