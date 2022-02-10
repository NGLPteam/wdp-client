import { Story } from "@storybook/react";
import Checkbox from "../Checkbox";
import CheckboxGroup from "./CheckboxGroup";

type Props = React.ComponentProps<typeof CheckboxGroup>;

export default {
  title: "Components/Forms/CheckboxGroup",
  component: Checkbox,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const Template: Story<Props> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox label="Checkbox 1" value={1} />
    <Checkbox label="Checkbox 2" value={2} />
    <Checkbox label="Checkbox 3" value={3} />
  </CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  label: "Group Label",
};
