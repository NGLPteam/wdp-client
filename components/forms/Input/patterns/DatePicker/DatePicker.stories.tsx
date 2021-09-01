import DatePicker from "./DatePicker";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof DatePicker>;

export default {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
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
        <DatePicker
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Date Picker",
  placeholder: "Placeholder text",
  description: "Format: MM/DD/YYYY",
  hideLabel: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
