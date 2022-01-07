import { Story } from "@storybook/react";
import ArrowLink from "./ArrowLink";

type Props = React.ComponentProps<typeof ArrowLink>;

export default {
  title: "Components/Atomic/Links/ArrowLink",
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
    <div style={{ width: 200, paddingTop: 16 }}>
      <ArrowLink {...args}>Arrow link with lots of wrapping text</ArrowLink>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: "Read More",
};
