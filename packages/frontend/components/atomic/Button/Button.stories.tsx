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
  <div className="l-flex l-flex--gap">
    <Button {...args}>Button!</Button>
    <Button {...args} secondary>
      Secondary Button!
    </Button>
  </div>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  size: "lg",
  disabled: false,
};
