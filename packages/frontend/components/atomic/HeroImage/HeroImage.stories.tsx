import { Story } from "@storybook/react";
import HeroImageBase from "./HeroImageBase";

type Props = React.ComponentProps<typeof HeroImageBase>;

export default {
  title: "Components/Atomic/HeroImage",
  component: HeroImageBase,
};

const Template: Story<Props> = (args) => <HeroImageBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `/images/placeholders/blue-ucla.png`,
};
