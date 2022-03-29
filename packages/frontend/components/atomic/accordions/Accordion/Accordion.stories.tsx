import { Story } from "@storybook/react";
import Accordion from "./Accordion";

type Props = React.ComponentProps<typeof Accordion>;

export default {
  title: "Components/Atomic/Accordion",
  component: Accordion,
};

const Template: Story<Props> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Example",
  menuItems: [
    <a href="#" key={1}>
      Item One
    </a>,
    <a href="#" key={2}>
      Item Two
    </a>,
    <a href="#" key={3}>
      Item Three
    </a>,
  ],
};
