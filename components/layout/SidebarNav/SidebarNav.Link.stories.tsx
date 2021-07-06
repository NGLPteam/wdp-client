import { Story } from "@storybook/react";
import SidebarNav from ".";

type Props = React.ComponentProps<typeof SidebarNav.Link>;

export default {
  title: "Components/Atomic/SidebarNav.Link",
  component: SidebarNav.Link,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = ({ text, ...args }) => (
  <SidebarNav.Link href="#" {...args}>
    {text}
  </SidebarNav.Link>
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  text: "Link",
  active: false,
};
