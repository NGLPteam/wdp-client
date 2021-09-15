import { Story } from "@storybook/react";
import ProgressBar from ".";

type Props = React.ComponentProps<typeof ProgressBar>;

export default {
  title: "Components/Atomic/loading/ProgressBar",
  component: ProgressBar,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <ProgressBar {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  label: "Loading",
};
