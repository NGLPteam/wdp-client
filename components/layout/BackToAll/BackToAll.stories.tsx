import { Story } from "@storybook/react";
import BackToAll from ".";

type Props = React.ComponentProps<typeof BackToAll>;

export default {
  title: "Components/Layout/BackToAll",
  component: BackToAll,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => <BackToAll {...args} />;

export const Default: Story<Props> = Template.bind({});
Default.args = {
  route: "communities",
};
