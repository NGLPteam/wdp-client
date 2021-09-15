import React from "react";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import FieldFactory, { FIELD_MAP } from "./FieldFactory";
type Props = React.ComponentProps<typeof FieldFactory>;

type FieldValues = {
  example?: string;
};

export default {
  title: "Components/Factories/FieldFactory",
  component: FieldFactory,
  argTypes: {
    field: {
      options: Object.keys(FIELD_MAP),
      control: { type: "select" },
    },
  },
};

const Template: Story<Props> = (args) => (
  <NullForm<FieldValues>>
    {({ form: { register } }) => (
      <FieldFactory {...args} {...register("example")} />
    )}
  </NullForm>
);
Template.args = {
  field: "text",
  label: "Field label",
  options: [
    {
      label: "Label",
      value: "value",
    },
  ],
  text: "Text",
};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};
