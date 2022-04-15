import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { Checkbox } from "components/forms";
import { SearchFilterBooleanFragment$key } from "@/relay/SearchFilterBooleanFragment.graphql";

export default function SearchFilterBoolean({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  // Checkbox are never search "in" - just "equals"
  return (
    <Checkbox
      label={filter.label}
      value="true"
      {...register(`${filter.searchPath.replace(".", "-")}--equals`)}
    />
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
