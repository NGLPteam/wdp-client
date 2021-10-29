import { Story } from "@storybook/react";
import { Controller } from "react-hook-form";
import NullForm from "components/api/NullForm";
import FullTextInput from ".";

type FieldValues = {
  example?: string;
};

type Props = React.ComponentProps<typeof FullTextInput>;

export default {
  title: "Components/Forms/FullTextInput",
  component: FullTextInput,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

export const InAForm: Story<Props> = (args) => {
  function handleSubmit(data: Record<string, string | string[]>) {
    console.info(data);
  }

  return (
    <NullForm<FieldValues> onSubmit={handleSubmit}>
      {({ form: { control } }) => (
        <Controller<FieldValues>
          name="example"
          control={control}
          defaultValue=""
          render={({ field }) => {
            return <FullTextInput {...args} {...field} />;
          }}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Full Text Input",
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
  value: { control: { disable: true } },
};
