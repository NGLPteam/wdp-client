import { Story } from "@storybook/react";
import ArrowLink from "./ArrowLink";

type Props = React.ComponentProps<typeof ArrowLink>;

export default {
  title: "Components/Atomic/ArrowLink",
  component: ArrowLink,
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
    <ArrowLink {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  label: "Arrow Link",
};
