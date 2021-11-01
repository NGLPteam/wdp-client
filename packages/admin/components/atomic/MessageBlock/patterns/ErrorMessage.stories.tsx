import { Story } from "@storybook/react";
import { ErrorMessage } from "../";
type Props = React.ComponentProps<typeof ErrorMessage>;

export default {
  title: "Components/Atomic/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    type: {
      options: ["error", "empty"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <ErrorMessage {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  name: "Error message goes here",
  message: (
    <span>
      Description text for this message window appears here, if necessary. There
      may even be a <a href="#">link to another page</a> or a button below the
      description.
    </span>
  ),
  link: {
    label: "BUTTON LINK GOES HERE",
    href: "/",
  },
};
