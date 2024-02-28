import { Fragment } from "react";
import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { getFilterInputLabel, getFilterInputType } from "@wdp/lib/search";
import { Input } from "components/forms";
import {
  SearchFilterInputFragment$key,
  SearchFilterInputFragment$data,
} from "@/relay/SearchFilterInputFragment.graphql";
import * as Styled from "./SearchFilterInput.styles";

type SearchOperators = SearchFilterInputFragment$data["searchOperators"];

export default function SearchFilterInput({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  const renderInputs = (operators: SearchOperators) =>
    operators.map((operator, i) => (
      <Fragment key={i}>
        <Input
          label={getFilterInputLabel(filter.label, operator)}
          type={getFilterInputType(operator)}
          {...register(`${filter.searchPath.replace(".", "-")}--${operator}`)}
        />
      </Fragment>
    ));

  if (!filter || !filter.searchOperators) return null;

  return filter.searchPath === "$core.published" ? (
    <Styled.FlexWrapper>
      {renderInputs(filter.searchOperators)}
    </Styled.FlexWrapper>
  ) : (
    <>{renderInputs(filter.searchOperators)}</>
  );
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
