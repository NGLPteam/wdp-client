import ContentTitle from ".";
import { Story } from "@storybook/react";
type Props = React.ComponentProps<typeof ContentTitle>;

export default {
  title: "Components/Atomic/ContentTitle",
  component: ContentTitle,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = ({ text, ...args }) => (
  <ContentTitle {...args}>{text}</ContentTitle>
);

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  text: "Page Content",
};

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = {
  text: "Secondary Page Content",
  as: "h2",
};
