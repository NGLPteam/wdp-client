import { Story } from "@storybook/react";
import ExternalLink from "./ExternalLink";

type Props = React.ComponentProps<typeof ExternalLink>;

export default {
  title: "Components/Atomic/Links/ExternalLink",
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
    <div style={{ width: 200, paddingTop: 16 }}>
      <ExternalLink href="#" className={args.className}>
        External link with lots of wrapping text
      </ExternalLink>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: "External link",
};
