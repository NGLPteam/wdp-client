import { Story } from "@storybook/react";
import TabLink from "./TabLink";
type Props = React.ComponentProps<typeof TabLink>;

export default {
  title: "Components/Atomic/Links/TabLink",
  component: TabLink,
};

const Template: Story<Props> = (args) => <TabLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  route: "collection.child.collections",
  children: "Collection",
};
