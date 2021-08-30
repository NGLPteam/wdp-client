import React from "react";
import { Story } from "@storybook/react";
import NullForm from "components/api/NullForm";
import ContributorLinksInput from "./ContributorLinksInput";

type Props = React.ComponentProps<typeof ContributorLinksInput>;

export default {
  title: "Components/Composed/Contributor/ContributorLinksInput",
  component: ContributorLinksInput,
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
        <ContributorLinksInput
          {...args}
          register={register}
          control={control}
        />
      )}
    </NullForm>
  );
};

InAForm.args = {
  label: "Links:",
  name: "links",
};
