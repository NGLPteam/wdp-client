import React from "react";
import { Story } from "@storybook/react";
import FieldsetSection from ".";
import NullForm from "components/api/NullForm";
import { Fieldset, Input } from "components/forms";

type FieldValues = {
  example?: string;
  example2?: string;
  example3?: string;
};

type Props = React.ComponentProps<typeof FieldsetSection>;

export default {
  title: "Components/Forms/FieldsetSection",
  component: FieldsetSection,
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
        <FieldsetSection {...args}>
          <Input label="Child Input" {...register("example")} />
          <Fieldset label="Child fieldset">
            <Input label="Child Input" {...register("example2")} />
          </Fieldset>
          <Fieldset label="Child fieldset">
            <Input label="Child Input" {...register("example3")} />
          </Fieldset>
        </FieldsetSection>
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Example fieldset",
};
