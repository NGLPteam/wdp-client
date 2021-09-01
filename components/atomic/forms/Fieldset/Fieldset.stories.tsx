import Fieldset from "./";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import { Input } from "components/atomic/forms";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof Fieldset>;

export default {
  title: "Components/Atomic/Forms/Fieldset",
  component: Fieldset,
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
        <Fieldset {...args}>
          <Input label="Child Input" {...register("example")} />
        </Fieldset>
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Example fieldset",
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
