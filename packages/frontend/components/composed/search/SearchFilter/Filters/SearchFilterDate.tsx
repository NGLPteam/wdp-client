import { Fragment } from "react";
import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { getFilterInputLabel } from "@wdp/lib/search";
import { Input } from "components/forms";
import { SearchFilterDateFragment$key } from "@/relay/SearchFilterDateFragment.graphql";

export default function SearchFilterDate({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  const renderInput = (operator: string, i = 1) => (
    <div key={i}>
      <Input
        label={getFilterInputLabel(filter.label, operator)}
        type="date"
        {...register(`${filter.searchPath.replace(".", "-")}--${operator}`)}
      />
      <span className="t-copy-xs t-copy-lighter">
        {filter.searchPath} - {operator}
      </span>
    </div>
  );

  return filter && filter.searchOperators ? (
    <Fragment>{filter.searchOperators.map(renderInput)}</Fragment>
  ) : (
    renderInput(filter.searchOperators[0])
  );
}

interface Props {
  data: SearchFilterDateFragment$key;
}

const fragment = graphql`
  fragment SearchFilterDateFragment on SearchableProperty {
    label
    description
    searchPath
    # These are the operators to use as keys in search predicate objects
    # when calling the results field.
    searchOperators
  }
`;
