import { Story } from "@storybook/react";
import Avatar from "./Avatar";

type Props = React.ComponentProps<typeof Avatar>;

export default {
  title: "Components/Atomic/Images/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => {
  return <Avatar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  url: `/images/placeholders/avatar1.jpeg`,
  size: "sm",
  alt: "",
};

export const NoImage = Template.bind({});
NoImage.args = {
  size: "sm",
  alt: "",
};
