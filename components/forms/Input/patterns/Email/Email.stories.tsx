import Email from "./Email";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Email>;

export default {
  title: "Components/Forms/Email",
  component: Email,
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
        <Email
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Email",
  placeholder: "Placeholder text",
  description: "Descriptive text",
  hideLabel: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
