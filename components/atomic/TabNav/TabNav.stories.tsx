import TabNav from "./TabNav";
import Tab from "components/atomic/Tab";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof TabNav>;

export default {
  title: "Components/Atomic/TabNav",
  component: TabNav,
};

const Template: Story<Props> = (args) => {
  return (
    <TabNav {...args}>
      <Tab href="#" active>
        Tab 1
      </Tab>
      <Tab href="#">Tab 2</Tab>
      <Tab href="#">Tab 3</Tab>
    </TabNav>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
