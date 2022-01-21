import { Story } from "@storybook/react";
import FileThumbnail from "./FileThumbnail";

type Props = React.ComponentProps<typeof FileThumbnail>;

export default {
  title: "Components/Atomic/Images/FileThumbnail",
  component: FileThumbnail,
  argTypes: {
    kind: {
      options: ["text", "image", "audio", "video"],
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => <FileThumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "",
  url: `/images/placeholders/renaissance.png`,
  kind: "text",
};

export const NoImage = Template.bind({});
NoImage.args = {
  alt: "",
  url: "",
  kind: "text",
};
