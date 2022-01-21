import { Story } from "@storybook/react";
import ContentImageBase from "./ContentImageBase";

type Props = React.ComponentProps<typeof ContentImageBase>;

export default {
  title: "Components/Atomic/Images/ContentImage",
  component: ContentImageBase,
};

const Template: Story<Props> = (args) => (
  <div style={{ width: "500px" }}>
    <ContentImageBase {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `/images/placeholders/renaissance.png`,
};
