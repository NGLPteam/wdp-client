import React from "react";
import { Story } from "@storybook/react";
import LinksRepeater from "./LinksRepeater";
import NullForm from "components/api/NullForm";

type Props = React.ComponentProps<typeof LinksRepeater>;

export default {
  title: "Components/Forms/LinksRepeater",
  component: LinksRepeater,
};

type FieldValues = {
  links?: {
    title?: string;
    url?: string;
  };
};

export const InAForm: Story<Props> = (args) => {
  return (
    <NullForm<FieldValues>>
      {({ form: { register, control } }) => (
        <LinksRepeater {...args} register={register} control={control} />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Links",
  itemLabel: "Link",
  name: "links",
};
