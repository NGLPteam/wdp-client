import React from "react";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import FieldFactory, { FIELD_MAP } from "./FieldFactory";
import { Forms } from "components/api/MutationForm";
type Props = React.ComponentProps<typeof FieldFactory>;

type FieldValues = {
  example?: string;
  select?: string;
  typeahead?: string;
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

const FIELDS_DATA: Props[] = [
  {
    field: "text",
    name: "example",
    label: "Example",
  },
  {
    field: "select",
    name: "select",
    label: "Select",
    placeholder: "Select an Item",
    options: [
      {
        label: "Value",
        value: "value",
      },
    ],
  },
  {
    field: "typeahead",
    name: "typeahead",
    label: "Typeahead",
    placeholder: "Find an Item",
    options: [
      {
        label: "Value",
        value: "value",
      },
    ],
  },
];

const Template: Story<Props> = () => (
  <NullForm<FieldValues>>
    {({ form: { register } }) => (
      <Forms.FormGrid>
        {FIELDS_DATA.map(({ field, name, ...props }, i) => (
          <FieldFactory key={i} field={field} {...props} {...register(name)} />
        ))}
      </Forms.FormGrid>
    )}
  </NullForm>
);
Template.args = {};

export const Default = Template.bind({});
Default.args = {
  ...Template.args,
};
