import { Story } from "@storybook/react";
import { ICON_KEYS } from "../../factories/IconFactory";
import Button from "./";
type Props = React.ComponentProps<typeof Button>;

export default {
  title: "Components/Atomic/Button",
  component: Button,
  argTypes: {
    icon: {
      options: [null, ...ICON_KEYS],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  children: "A Button!",
  secondary: false,
  size: "lg",
};
