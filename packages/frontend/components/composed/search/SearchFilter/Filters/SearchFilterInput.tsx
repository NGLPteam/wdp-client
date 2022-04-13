import { Fragment } from "react";
import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { getFilterInputLabel, getFilterInputType } from "@wdp/lib/search";
import { Input } from "components/forms";
import { SearchFilterInputFragment$key } from "@/relay/SearchFilterInputFragment.graphql";

export default function SearchFilterInput({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  return filter && filter.searchOperators ? (
    <>
      {filter.searchOperators.map((operator, i) => (
        <Fragment key={i}>
          <Input
            label={getFilterInputLabel(filter.label, operator)}
            type={getFilterInputType(operator)}
            {...register(`${filter.searchPath.replace(".", "-")}--${operator}`)}
          />
        </Fragment>
      ))}
    </>
  ) : null;
}

interface Props {
  data: SearchFilterInputFragment$key;
}

const fragment = graphql`
  fragment SearchFilterInputFragment on SearchableProperty {
    label
    description
    searchPath
    # These are the operators to use as keys in search predicate objects
    # when calling the results field.
    searchOperators
  }
`;
