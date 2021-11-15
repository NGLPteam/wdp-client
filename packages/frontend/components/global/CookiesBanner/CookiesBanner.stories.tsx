import { Story } from "@storybook/react";
import CookiesBanner from ".";
type Props = React.ComponentProps<typeof CookiesBanner>;

export default {
  title: "Components/Global/CookiesBanner",
  component: CookiesBanner,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = ({ onAccept, onClose }) => (
  <CookiesBanner onClose={onClose} onAccept={onAccept} />
);

export const Default: Story<Props> = Template.bind({});
Default.args = {
  onAccept: () => console.info("accept"),
  onClose: () => console.info("close"),
};
