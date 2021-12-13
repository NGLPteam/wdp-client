import { Story } from "@storybook/react";
import DownloadLink from "./DownloadLink";

type Props = React.ComponentProps<typeof DownloadLink>;

export default {
  title: "Components/Atomic/DownloadLink",
  component: DownloadLink,
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
    <DownloadLink {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {};
