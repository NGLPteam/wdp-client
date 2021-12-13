import { Story } from "@storybook/react";
import ExternalLink from "./ExternalLink";

type Props = React.ComponentProps<typeof ExternalLink>;

export default {
  title: "Components/Atomic/ExternalLink",
  component: ExternalLink,
  argTypes: {
    className: {
      options: ["t-label-sm", "t-copy", "t-copy-sm"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <br />
    <ExternalLink {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
