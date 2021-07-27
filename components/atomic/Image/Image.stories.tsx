import { Story } from "@storybook/react";
import Image from ".";

type Props = React.ComponentProps<typeof Image>;

export default {
  title: "Components/Atomic/Image",
  component: Image,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

// eslint-disable-next-line jsx-a11y/alt-text
const Template: Story<Props> = (args) => <Image {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  image: {
    height: 500,
    width: 500,
    alt: "Alt text",
    url: "https://picsum.photos/500/500",
  },
};
