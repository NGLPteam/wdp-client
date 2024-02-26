import { Story } from "@storybook/react";
import LoadingSkeleton from ".";

type Props = React.ComponentProps<typeof LoadingSkeleton>;

export default {
  title: "Components/Atomic/Loading/LoadingSkeleton",
  component: LoadingSkeleton,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props & { label: string }> = (args) => {
  return (
    <div style={{ height: "40px", width: "400px" }}>
      <LoadingSkeleton {...args} />
    </div>
  );
};

export const Default: Story<Props & { label: string }> = Template.bind({});
Default.args = {
  label: "Loading",
};
