import { Story } from "@storybook/react";
import CompactHero from "./CompactHero";

type Props = React.ComponentProps<typeof CompactHero>;

export default {
  title: "Components/Layout/Hero/CompactHero",
  component: CompactHero,
};

const Template: Story<Props> = (args) => <CompactHero {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  title: "Title",
  subtitle: "Subtitle",
  style: "primary",
};

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = {
  title: "Title",
  subtitle: "Subtitle",
  style: "secondary",
};

export const Journal: Story<Props> = Template.bind({});
Journal.args = {
  title: "Journal Name",
  subtitle: (
    <>
      <span>Issue #</span> <span className="a-color-lighter">Volume #</span>
    </>
  ),
  style: "secondary",
};
