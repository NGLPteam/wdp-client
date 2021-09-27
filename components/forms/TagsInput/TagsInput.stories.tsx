import TagsInput from ".";
import { Story } from "@storybook/react";
import { Controller } from "react-hook-form";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: string[];
  text?: string;
};

type Props = React.ComponentProps<typeof TagsInput>;

export default {
  title: "Components/Forms/TagsInput",
  component: TagsInput,
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
          defaultValue={["apple", "banana", "orange"]}
          render={({ field: { value, ...field } }) => (
            <TagsInput
              value={typeof value === "string" ? [] : value}
              {...args}
              {...field}
            />
          )}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Tags Input",
  placeholder: "Type and press enter to add a tag",
  description:
    "Description field adding detail or explanation for what this form field or control will do and offering guidance for how to use it.",
  hideLabel: false,
  required: false,
};
