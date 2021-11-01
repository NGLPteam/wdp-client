import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import Switch from "./Switch";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Switch>;

export default {
  title: "Components/Forms/Switch",
  component: Switch,
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
        <Switch
          {...args}
          {...register("example", { required: args.required })}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Toggle",
  text: "Toggle text",
  description: "Description text",
  hideLabel: false,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
