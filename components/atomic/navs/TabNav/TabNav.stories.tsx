import { Story } from "@storybook/react";
import TabNav from "./TabNav";
type Props = React.ComponentProps<typeof TabNav>;

export default {
  title: "Components/Atomic/Navs/TabNav",
  component: TabNav,
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/EeaBT8NWvguKGhMQ7pgpry/NGLP-Admin-UI-Design?node-id=1140%3A9030",
    },
  },
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
