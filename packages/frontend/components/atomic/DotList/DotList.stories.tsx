import { Story } from "@storybook/react";
import DotList from "./";

type Props = React.ComponentProps<typeof DotList>;

export default {
  title: "Components/Atomic/DotList",
  component: DotList,
  argTypes: {
    className: {
      options: ["t-copy", "t-copy-light", "t-copy-sm"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <>
    <p className="t-copy-lighter">
      Hint: Try changing the text style by changing the className property
    </p>
    <DotList {...args}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </DotList>
  </>
);

export const Default = Template.bind({});
Default.args = {};
