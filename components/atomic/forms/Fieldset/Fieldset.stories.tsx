import { Story } from "@storybook/react";
import { Input } from "components/atomic/forms";
import Fieldset from "./";

type Props = React.ComponentProps<typeof Fieldset>;

export default {
  title: "Components/Atomic/Forms/Fieldset",
  component: Fieldset,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const inputProps = {
  type: "string",
  label: "Text Input",
  placeholder: "Placeholder text",
  description: "Descriptive text",
};

const Template: Story<Props> = (args) => (
  <Fieldset {...args}>
    <Input {...inputProps} />
  </Fieldset>
);

export const Default = Template.bind({});
Default.args = {
  legend: "Legend!",
};
