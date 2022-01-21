import { Story } from "@storybook/react";
import LoadingBlock from "./LoadingBlock";

type Props = React.ComponentProps<typeof LoadingBlock>;

export default {
  title: "Components/Atomic/Loading/LoadingBlock",
  component: LoadingBlock,
  argTypes: {
    className: {
      options: ["a-bg-neutral00", "a-bg-custom10"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <LoadingBlock {...args} />;

export const Default = Template.bind({});
