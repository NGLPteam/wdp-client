import { Story } from "@storybook/react";
import { Controller } from "react-hook-form";
import FullTextInput from ".";
import type { Value } from "./FullTextInput";
import NullForm from "components/api/NullForm";

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

export const InAForm: Story<Props> = ({ defaultValue, ...args }) => {
  function handleSubmit(data: Record<string, string | string[]>) {
    console.info(data);
  }

  return (
    <NullForm<FieldValues> onSubmit={handleSubmit}>
      {({ form: { control } }) => (
        <Controller<FieldValues>
          name="example"
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => {
            return (
              <FullTextInput
                {...args}
                {...field}
                value={field.value as Value}
              />
            );
          }}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Full Text Input",
  defaultValue: {
    content: "Some content",
    kind: "TEXT",
    lang: "en",
  } as Value,
  required: false,
};

InAForm.argTypes = {
  name: { control: { disable: true } },
  value: { control: { disable: true } },
};
