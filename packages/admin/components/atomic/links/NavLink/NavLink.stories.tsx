import { Story } from "@storybook/react";
import NavLink from "./";
type Props = React.ComponentProps<typeof NavLink>;

export default {
  title: "Components/Atomic/Links/NavLink",
  component: NavLink,
};

const Template: Story<Props & { route: string }> = (args) => (
  <NavLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  route: "collection.child.collections",
  children: "Collection",
};
