import { Story } from "@storybook/react";
import ArrowList from "./";

type Props = React.ComponentProps<typeof ArrowList>;

export default {
  title: "Components/Atomic/ArrowList",
  component: ArrowList,
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
    <ArrowList {...args}>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
      <li>List item</li>
    </ArrowList>
  </>
);

export const Default = Template.bind({});
Default.args = {};
