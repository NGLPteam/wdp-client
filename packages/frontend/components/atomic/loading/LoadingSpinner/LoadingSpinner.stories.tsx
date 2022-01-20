import { Story } from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";

type Props = React.ComponentProps<typeof LoadingSpinner>;

export default {
  title: "Components/Atomic/Loading/LoadingSpinner",
  component: LoadingSpinner,
};

const Template: Story<Props> = () => <LoadingSpinner />;

export const Default = Template.bind({});
