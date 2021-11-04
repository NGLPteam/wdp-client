import { Story } from "@storybook/react";
import HiddenField from ".";
import NullForm from "components/api/NullForm";
import { Input, Select, Switch } from "components/forms";

type FieldValues = {
  hidden?: string;
  example?: string;
};

export default {
  title: "Components/Forms/HiddenField",
  component: HiddenField,
  parameters: {
    themes: {
      default: "neutral00",
    },
  },
  argTypes: {
    name: { control: { disable: true } },
  },
};

export const WithASelect: Story = (args) => {
  return (
    <NullForm<FieldValues>>
      {({ form: { register, watch } }) => (
        <>
          <Select
            label="Visibility"
            {...register("hidden")}
            options={[
              { label: "Hidden", value: "HIDDEN" },
              { label: "Visible", value: "VISIBLE" },
            ]}
            defaultValue="HIDDEN"
          />
          <HiddenField watch={watch} showOn="VISIBLE" field="hidden">
            <Input {...args} label="Input Example" {...register("example")} />
          </HiddenField>
        </>
      )}
    </NullForm>
  );
};

WithASelect.args = {};

export const WithASwitch: Story = (args) => {
  return (
    <NullForm<FieldValues>>
      {({ form: { register, watch } }) => (
        <>
          <Switch
            label="Visibility"
            text="Show the input below?"
            {...register("hidden")}
          />
          <HiddenField watch={watch} showOn={true} field="hidden">
            <Input {...args} label="Input Example" {...register("example")} />
          </HiddenField>
        </>
      )}
    </NullForm>
  );
};

WithASwitch.args = {};
