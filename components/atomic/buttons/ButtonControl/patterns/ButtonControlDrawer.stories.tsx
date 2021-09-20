import ButtonControlDrawer from "./ButtonControlDrawer";
import { Story } from "@storybook/react";
import { ICON_KEYS } from "components/factories/IconFactory";
import { withDesign } from "storybook-addon-designs";
type BaseProps = React.ComponentProps<typeof ButtonControlDrawer>;

export default {
  title: "Components/Atomic/Buttons/ButtonControlDrawer",
  component: ButtonControlDrawer,
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
  <ButtonControlDrawer {...args}>{text}</ButtonControlDrawer>
);

export const Default: Story<Props> = Template.bind({});

Default.args = {
  text: "Example Add Button",
  icon: "plus",
  drawer: "addPerson",
  disabled: false,
};
