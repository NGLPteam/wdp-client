import React, { forwardRef, Ref } from "react";
// import { OrderingDirectSelection } from "types/graphql-schema";
import RadioGroup from "../RadioGroup";

type RadioGroupProps = React.ComponentProps<typeof RadioGroup>;

type Props = Omit<RadioGroupProps, "label" | "description" | "options">;

function OrderingDirectSelectionInput(
  { ...props }: Props,
  ref: Ref<HTMLInputElement>,
) {
  // const defaultValue = "CHILDREN" as OrderingDirectSelection;

  return (
    <RadioGroup
      {...props}
      ref={ref}
      label="forms.fields.include_descendants"
      description={"forms.fields.include_descendants_description"}
      options={[
        { value: "CHILDREN", label: "Direct Descendants" },
        { value: "DESCENDANTS", label: "All Descendants" },
      ]}
    />
  );
}

export default forwardRef(OrderingDirectSelectionInput);
