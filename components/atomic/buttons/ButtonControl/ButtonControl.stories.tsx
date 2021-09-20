import ButtonControl from "./ButtonControl";
import { Story } from "@storybook/react";
import { ICON_KEYS } from "components/factories/IconFactory";
import { withDesign } from "storybook-addon-designs";
type BaseProps = React.ComponentProps<typeof ButtonControl>;

export default {
  title: "Components/Atomic/Buttons/ButtonControl",
  component: ButtonControl,
  decorators: [withDesign],
  parameters: {
    themes: {
      default: "neutral00",
    },
    design: [
      {
        type: "figma",
        url:
          "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=29%3A163",
      },
      {
        type: "figma",
        url:
          "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=29%3A157",
      },
      {
        type: "figma",
        url:
          "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=38%3A240",
      },
    ],
  },
  argTypes: {
    icon: {
      options: [null, ...ICON_KEYS],
      control: { type: "select" },
    },
    size: {
      options: ["default", "large"],
      control: { type: "select" },
    },
  },
};

interface Props extends BaseProps {
  disabled: boolean;
  text: string;
  href: string;
  "aria-label"?: string;
}

const Template: Story<Props> = ({ text, ...args }) => (
  <ButtonControl {...args}>{text}</ButtonControl>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  text: "Button",
  disabled: false,
};

export const WithIcon: Story<Props> = Template.bind({});

WithIcon.args = {
  text: "Button",
  disabled: false,
  icon: "close",
};

export const AsLink: Story<Props> = Template.bind({});

AsLink.args = {
  text: "A Link",
  disabled: false,
  as: "a",
  href: "#",
};

export const IconOnly: Story<Props> = Template.bind({});

IconOnly.args = {
  disabled: false,
  icon: "close",
  "aria-label": "Button",
};

export const WithAuthActions: Story<Props> = Template.bind({});

WithAuthActions.args = {
  disabled: false,
  icon: "edit",
  text: "Edit",
  "aria-label": "Button",
  actions: "self.edit",
  allowedActions: ["self.edit"],
};
