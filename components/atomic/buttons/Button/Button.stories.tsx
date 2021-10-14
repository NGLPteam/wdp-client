import { Story } from "@storybook/react";
import { withDesign } from "storybook-addon-designs";
import Button from ".";
type Props = React.ComponentProps<typeof Button>;

export default {
  title: "Components/Atomic/Buttons/Button",
  component: Button,
  decorators: [withDesign],
  parameters: {
    themes: {
      default: "neutral00",
    },
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=59%3A50",
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
