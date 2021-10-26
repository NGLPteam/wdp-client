import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import RadioGroup from "./RadioGroup";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof RadioGroup>;

export default {
  title: "Components/Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const InAForm: Story<Props> = (args) => {
  const handleSubmit = (data: Record<string, string>) => console.info(data);

  return (
    <NullForm<FieldValues> onSubmit={handleSubmit}>
      {({ form: { register } }) => (
        <RadioGroup
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Radio Group",
  "aria-label": "radio group",
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  description: "Description text",
  required: true,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
