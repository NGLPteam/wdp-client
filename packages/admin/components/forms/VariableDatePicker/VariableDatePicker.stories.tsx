import React from "react";
import { Controller } from "react-hook-form";
import { Story } from "@storybook/react";
import VariableDatePicker from "./VariableDatePicker";
import NullForm from "components/api/NullForm";

type FieldValues = {
  example?: {
    value: "2009";
    precision: "YEAR";
  };
};

type Props = React.ComponentProps<typeof VariableDatePicker>;

export default {
  title: "Components/Forms/VariableDatePicker",
  component: VariableDatePicker,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
};

type Value = {
  value: string;
  precision: string;
};

export const InAForm: Story<Props> = ({ defaultValue, ...args }) => {
  function handleSubmit(data: Record<string, string | Value>) {
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
            return <VariableDatePicker {...args} {...field} />;
          }}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Date Picker",
  hideLabel: false,
  defaultValue: {
    value: "2021-10-21",
    precision: "YEAR",
  },
};

InAForm.argTypes = {
  name: { control: { disable: true } },
};
