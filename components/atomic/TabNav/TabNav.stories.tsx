import TabNav from "./TabNav";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof TabNav>;

export default {
  title: "Components/Atomic/TabNav",
  component: TabNav,
};

const Template: Story<Props> = (args) => <TabNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      route: "collection.child.collections",
      label: "glossary.collection.label_plural",
    },
    {
      route: "collection.child.items",
      label: "glossary.item.label_plural",
    },
    {
      route: "collection.manage",
      label: "manage",
    },
  ],
};
