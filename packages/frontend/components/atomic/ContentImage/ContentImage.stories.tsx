import { Story } from "@storybook/react";
import HeroImageBase from "./ContentImageBase";
import { baseColors } from "theme/base/variables";

type Props = React.ComponentProps<typeof HeroImageBase>;

export default {
  title: "Components/Atomic/HeroImage",
  component: HeroImageBase,
};

const Template: Story<Props> = (args) => <HeroImageBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `https://via.placeholder.com/2880x600/${baseColors.neutral20}`,
};
