import { Story } from "@storybook/react";
import { CoverImageBase } from "./CoverImage";
import { baseColors } from "theme/base/variables";

type Props = React.ComponentProps<typeof CoverImageBase>;

export default {
  title: "Components/Atomic/CoverImage",
  component: CoverImageBase,
};

const Template: Story<Props> = (args) => <CoverImageBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `https://via.placeholder.com/278x371/${baseColors.neutral20}`,
  width: 278,
  height: 371,
  maxWidth: 278,
};
