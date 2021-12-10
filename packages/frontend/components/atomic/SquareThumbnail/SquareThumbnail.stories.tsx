import { Story } from "@storybook/react";
import SquareThumbnailBase from "./SquareThumbnailBase";

type Props = React.ComponentProps<typeof SquareThumbnailBase>;

export default {
  title: "Components/Atomic/SquareThumbnail",
  component: SquareThumbnailBase,
};

const Template: Story<Props> = (args) => <SquareThumbnailBase {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `/images/placeholders/renaissance.png`,
};
