import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import Select from ".";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Select>;

export default {
  title: "Components/Forms/Select",
  component: Select,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const InAForm: Story<Props> = (args) => {
  return (
    <NullForm<FieldValues>>
      {({ form: { register } }) => (
        <Select
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Select Dropdown",
  placeholder: "Select an item",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  options: [
    { label: "One", value: 1 },
    { label: "Two", value: 2 },
  ],
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
