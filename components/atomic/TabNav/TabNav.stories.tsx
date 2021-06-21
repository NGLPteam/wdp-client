import TabNav from "./TabNav";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof TabNav>;

export default {
  title: "Components/Atomic/TabNav",
  component: TabNav,
};

const Template: Story<Props> = (args) => {
  return (
    <TabNav {...args}>
      <TabNav.Tab href="#" active>
        Tab 1
      </TabNav.Tab>
      <TabNav.Tab href="#">Tab 2</TabNav.Tab>
      <TabNav.Tab href="#">Tab 3</TabNav.Tab>
    </TabNav>
  );
};

export const Default = Template.bind({});
Default.args = {};
