import { Story } from "@storybook/react";
import ContentHeader from ".";
import { ButtonControl } from "components/atomic";
type Props = React.ComponentProps<typeof ContentHeader>;

export default {
  title: "Components/Layout/ContentHeader",
  component: ContentHeader,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    headerStyle: {
      options: ["primary", "secondary"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <ContentHeader {...args} />;

export const Primary: Story<Props> = Template.bind({});
Primary.args = {
  title: "Header",
  headerStyle: "primary",
};

export const Secondary: Story<Props> = Template.bind({});
Secondary.args = {
  title: "Secondary Header",
  headerStyle: "secondary",
};

export const WithRightSideContent: Story<Props> = Template.bind({});
WithRightSideContent.args = {
  title: "Header",
  rightSide: <ButtonControl>Button</ButtonControl>,
};
