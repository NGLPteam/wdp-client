import { Story } from "@storybook/react";
import ContentImageBase from "./ContentImageBase";
import { baseColors } from "theme/base/variables";

type Props = React.ComponentProps<typeof ContentImageBase>;

export default {
  title: "Components/Atomic/ContentImage",
  component: ContentImageBase,
};

const Template: Story<Props> = (args) => <ContentImageBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `https://via.placeholder.com/2880x600/${baseColors.neutral20}`,
};
