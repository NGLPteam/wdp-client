import { Story } from "@storybook/react";
import MessageBlock from ".";
type Props = React.ComponentProps<typeof MessageBlock>;

export default {
  title: "Components/Atomic/MessageBlock",
  component: MessageBlock,
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

const Template: Story<Props> = (args) => <MessageBlock {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  name: "Message goes here",
};

export const WithButtonAndMessage: Story<Props> = Template.bind({});
WithButtonAndMessage.args = {
  ...Default.args,
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

export const WithMessage: Story<Props> = Template.bind({});
WithMessage.args = {
  ...Default.args,
  message: (
    <span>
      Description text for this message window appears here, if necessary. There
      may even be a <a href="#">link to another page</a> or a button below the
      description.
    </span>
  ),
};

export const WithButton: Story<Props> = Template.bind({});
WithButton.args = {
  ...Default.args,
  link: {
    label: "BUTTON LINK GOES HERE",
    href: "/",
  },
};
