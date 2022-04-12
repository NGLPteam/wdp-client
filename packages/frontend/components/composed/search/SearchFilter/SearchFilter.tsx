import { Fragment } from "react";
import { graphql, useFragment } from "react-relay";
import { useFormContext } from "react-hook-form";
import { SearchFilterFragment$key } from "@/relay/SearchFilterFragment.graphql";
import { Fieldset, Input } from "components/forms";

export default function SearchFilter({ data }: Props) {
  const filter = useFragment(fragment, data);

  const { register } = useFormContext();

  if (!filter.searchOperators) return null;

  const getInputType = (operator: string) => {
    switch (operator) {
      case "dateGTE":
      case "dateLTE":
        return "date";

      default:
        return "text";
    }
  };

  const getInputLabel = (label: string, operator: string) => {
    switch (operator) {
      case "dateGTE":
        return `${label} After`;

      case "dateLTE":
        return `${label} Before`;

      default:
        return label;
    }
  };

  const renderInput = (label: string, operator: string) => (
    <Input
      label={getInputLabel(label, operator)}
      type={getInputType(operator)}
      {...register(`${filter.searchPath.replace(".", "-")}--${operator}`)}
    />
  );

  return filter.searchOperators.length > 1 ? (
    <Fieldset legend={filter.label}>
      {filter.searchOperators.map((operator, i) => (
        <Fragment key={i}>{renderInput(filter.label, operator)}</Fragment>
      ))}
    </Fieldset>
  ) : (
    renderInput(filter.label, filter.searchOperators[0])
  );
}

interface Props {
  data: SearchFilterFragment$key;
}

const fragment = graphql`
  fragment SearchFilterFragment on SearchableCoreProperty {
    label
    description
    searchPath
    # These are the operators to use as keys in search predicate objects
    # when calling the results field.
    searchOperators
  }
`;
