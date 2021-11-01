import { Story } from "@storybook/react";
import LoadingCircle from ".";

type Props = React.ComponentProps<typeof LoadingCircle>;

export default {
  title: "Components/Atomic/Loading/LoadingCircle",
  component: LoadingCircle,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => {
  return (
    <div style={{ height: "600px", width: "400px" }}>
      <LoadingCircle {...args} />
    </div>
  );
};

export const Default: Story<Props> = Template.bind({});
Default.args = {
  label: "Loading",
};
