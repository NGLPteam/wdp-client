import { Story } from "@storybook/react";
import Checkbox from "./Checkbox";

type Props = React.ComponentProps<typeof Checkbox>;

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = () => (
  <Checkbox label="Example Checkbox" value={1} />
);

export const Default = Template.bind({});
