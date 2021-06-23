import Button from ".";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof Button>;

export default {
  title: "Components/Atomic/Button",
  component: Button,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = ({ text, ...args }) => (
  <Button {...args}>{text}</Button>
);

export const Primary: Story<Props> = Template.bind({});

Primary.args = {
  text: "A Button!",
  secondary: false,
  disabled: false,
};

export const Secondary: Story<Props> = Template.bind({});

Secondary.args = {
  text: "A Secondary Button!",
  secondary: true,
  disabled: false,
};
