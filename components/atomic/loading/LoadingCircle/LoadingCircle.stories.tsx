import { Story } from "@storybook/react";
import LoadingCircle from ".";

type Props = React.ComponentProps<typeof LoadingCircle>;

export default {
  title: "Components/Atomic/LoadingCircle",
  component: LoadingCircle,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <LoadingCircle {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  label: "Loading",
};
