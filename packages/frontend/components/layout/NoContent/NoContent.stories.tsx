import { Story } from "@storybook/react";
import NoContent from "./NoContent";

type Props = React.ComponentProps<typeof NoContent>;

export default {
  title: "Components/Layout/NoContent",
  component: NoContent,
};

const Template: Story<Props> = (args) => {
  return <NoContent {...args} />;
};

export const Default: Story<Props> = Template.bind({});

Default.args = {
  message: undefined,
};
