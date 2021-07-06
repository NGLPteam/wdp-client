import React from "react";
import { Story } from "@storybook/react";
import LogoPlaceholder from ".";

export default {
  title: "Components/Global/LogoPlaceholder",
  component: LogoPlaceholder,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
};

export const Default: Story = (args) => (
  <LogoPlaceholder href="#" {...args}>
    Logo Text
  </LogoPlaceholder>
);
