import { Story } from "@storybook/react";
import LoadingPage from "./LoadingPage";

type Props = React.ComponentProps<typeof LoadingPage>;

export default {
  title: "Components/Atomic/Loading/LoadingPage",
  component: LoadingPage,
};

const Template: Story<Props> = () => <LoadingPage />;

export const Default = Template.bind({});
