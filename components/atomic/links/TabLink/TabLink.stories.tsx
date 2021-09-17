import TabLink from "./TabLink";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof TabLink>;

export default {
  title: "Components/Atomic/Links/TabLink",
  component: TabLink,
  // parameters: {
  //   design: {
  //     type: "figma",
  //     url:
  //       "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=1140%3A9030",
  //   },
  // },
};

const Template: Story<Props> = (args) => <TabLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  route: "collection.child.collections",
  children: "Collection",
};
