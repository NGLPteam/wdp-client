import React from "react";
import { Story } from "@storybook/react";
import BaseDropdown from "./";

type Props = React.ComponentProps<typeof BaseDropdown>;

export default {
  title: "Components/Atomic/BaseDropdown",
  component: BaseDropdown,
  parameters: {
    themes: {
      default: "brand100",
    },
  },
};

export const Default: Story<Props> = (args) => {
  return (
    <BaseDropdown {...args} disclosure={<button>Custom menu</button>}>
      <a href="#">Some child item</a>
    </BaseDropdown>
  );
};

Default.args = {
  label: "A Base Dropdown",
};
