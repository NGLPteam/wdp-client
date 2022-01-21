import { Story } from "@storybook/react";
import LoadingBlock from "./LoadingBlock";

type Props = React.ComponentProps<typeof LoadingBlock>;

export default {
  title: "Components/Atomic/Loading/LoadingBlock",
  component: LoadingBlock,
};

const Template: Story<Props> = () => <LoadingBlock />;

export const Default = Template.bind({});
