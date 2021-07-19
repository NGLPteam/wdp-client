import { Story } from "@storybook/react";
import { NoResultsMessage } from "../";
type Props = React.ComponentProps<typeof NoResultsMessage>;

export default {
  title: "Components/Atomic/NoResultsMessage",
  component: NoResultsMessage,
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

const Template: Story<Props> = (args) => <NoResultsMessage {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  name: "No results message goes here",
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
