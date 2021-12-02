import { Story } from "@storybook/react";
import SquareThumbnailBase from "./SquareThumbnailBase";
import { baseColors } from "theme/base/variables";

type Props = React.ComponentProps<typeof SquareThumbnailBase>;

export default {
  title: "Components/Atomic/SquareThumbnail",
  component: SquareThumbnailBase,
};

const Template: Story<Props> = (args) => <SquareThumbnailBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `https://via.placeholder.com/${160 * 2}x${160 * 2}/${
    baseColors.neutral20
  }`,
};
