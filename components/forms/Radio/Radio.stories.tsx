import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import Radio from "./Radio";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Radio>;

export default {
  title: "Components/Forms/Radio",
  component: Radio,
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
        <Radio
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Radio",
  options: ["Option 1", "Option 2", "Option 3"],
  description: "Description text",
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
