import Textarea from ".";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Textarea>;

export default {
  title: "Components/Forms/Textarea",
  component: Textarea,
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
        <Textarea
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Text Area",
  placeholder: "Placeholder text",
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
