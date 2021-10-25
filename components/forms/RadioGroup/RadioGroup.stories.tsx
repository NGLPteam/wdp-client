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
  return (
    <NullForm<FieldValues>>
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
  groupLabel: "Radio Group",
  "aria-label": "radio group",
  options: ["Option 1", "Option 2", "Option 3"],
  description: "Description text",
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
