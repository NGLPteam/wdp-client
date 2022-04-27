import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { Select } from "components/forms";
import { SearchFilterSelectFragment$key } from "@/relay/SearchFilterSelectFragment.graphql";

export default function SearchFilterSelect({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  // Selects are never search "in" - just "equals"
  return filter?.options ? (
    <Select
      label={filter.label}
      isWide
      options={[{ value: "", label: "Select" }, ...filter.options]}
      {...register(`${filter.searchPath.replace(".", "-")}--equals`)}
    />
  ) : null;
}

interface Props {
  data: SearchFilterSelectFragment$key;
}

const fragment = graphql`
  fragment SearchFilterSelectFragment on SearchableProperty {
    label
    description
    searchPath
    # These are the operators to use as keys in search predicate objects
    # when calling the results field.
    searchOperators

    ... on SelectProperty {
      options {
        label
        value
      }
    }
  }
`;
