import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "components/forms";
import { SearchFilterBooleanFragment$key } from "@/relay/SearchFilterBooleanFragment.graphql";
import BaseInputWrapper from "components/forms/BaseInputWrapper";

export default function SearchFilterBoolean({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  const name = `${filter.searchPath.replace(".", "-")}--equals`;

  // Checkbox are never search "in" - just "equals"
  return (
    <BaseInputWrapper name={name} label={filter.label} hideLabel>
      <Checkbox value="true" {...register(name)}>
        {filter.label}
      </Checkbox>
    </BaseInputWrapper>
  );
}

interface Props {
  data: SearchFilterBooleanFragment$key;
}

const fragment = graphql`
  fragment SearchFilterBooleanFragment on SearchableProperty {
    label
    description
    searchPath
    # These are the operators to use as keys in search predicate objects
    # when calling the results field.
    searchOperators
  }
`;
