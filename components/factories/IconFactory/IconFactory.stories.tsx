import React from "react";
import { Story } from "@storybook/react";
import IconFactory, { ICON_KEYS } from "./";
type Props = React.ComponentProps<typeof IconFactory>;

export default {
  title: "Components/Factories/IconFactory",
  component: IconFactory,
  argTypes: {
    icon: {
      options: ICON_KEYS,
      control: { type: "select" },
    },
  },
};

export const Template: Story<Props> = (args) => <IconFactory {...args} />;

Template.args = {
  icon: ICON_KEYS[0],
};
