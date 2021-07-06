import { Story } from "@storybook/react";
import TabNav from ".";

type Props = React.ComponentProps<typeof TabNav.Tab>;

export default {
  title: "Components/Atomic/TabNav/TabNav.Tab",
  component: TabNav.Tab,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = ({ text, ...args }) => (
  <TabNav.Tab href="#" {...args}>
    {text}
  </TabNav.Tab>
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  text: "Tab",
  active: false,
};
