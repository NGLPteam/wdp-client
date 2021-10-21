import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import Typeahead from "components/forms/Typeahead";

import type {
  LinkTargetTypeaheadFragment$data,
  LinkTargetTypeaheadFragment$key,
} from "__generated__/LinkTargetTypeaheadFragment.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
import { useMaybeFragment } from "hooks";
type TypeaheadProps = React.ComponentProps<typeof Typeahead>;

const LinkTargetTypeahead = <T extends FieldValues = FieldValues>({
  data,
  control,
  name,
  label,
  disabled,
}: Props<T>) => {
  const optionsData = useMaybeFragment<LinkTargetTypeaheadFragment$key>(
    fragment,
    data
  );

  const options = useMemo(() => {
    const options = optionsData?.edges?.map((edge: LinkTargetEdge) => {
      const targetId = edge.node.targetId;
      const title =
        edge.node.target.__typename !== "%other" && edge.node.target.title;
      return {
        label: title || "",
        value: targetId,
      };
    });

    return options;
  }, [optionsData]);

  return options ? (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <Typeahead
          label={label}
          options={options}
          disabled={disabled}
          {...field}
        />
      )}
    />
  ) : null;
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  data?: LinkTargetTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
}

type LinkTargetEdge = LinkTargetTypeaheadFragment$data["edges"][number];

export default LinkTargetTypeahead;

const fragment = graphql`
  fragment LinkTargetTypeaheadFragment on LinkTargetCandidateConnection {
    edges {
      node {
        targetId
        target {
          __typename
          ... on Collection {
            title
          }

          ... on Item {
            title
          }
        }
      }
    }
  }
`;
