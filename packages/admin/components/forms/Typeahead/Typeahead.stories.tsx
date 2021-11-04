import { Story } from "@storybook/react";
import { Controller } from "react-hook-form";
import Typeahead from ".";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Typeahead>;

export default {
  title: "Components/Forms/Typeahead",
  component: Typeahead,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

const ITEMS = Array.from({ length: 50 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: i + 1,
}));

export const InAForm: Story<Props> = (args) => {
  return (
    <NullForm<FieldValues>>
      {({ form: { control } }) => (
        <Controller<FieldValues>
          name="example"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return <Typeahead {...args} {...field} />;
          }}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Typeahead Dropdown",
  placeholder: "Typeahead an item",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  options: ITEMS,
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
  value: { control: { disable: true } },
};
