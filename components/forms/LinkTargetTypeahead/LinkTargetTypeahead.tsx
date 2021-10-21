import React, { useMemo } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import Typeahead from "components/forms/Typeahead";

import type { LinkTargetTypeaheadFragment$key } from "__generated__/LinkTargetTypeaheadFragment.graphql";
import type {
  LinkTargetTypeaheadDataFragment$data,
  LinkTargetTypeaheadDataFragment$key,
} from "__generated__/LinkTargetTypeaheadDataFragment.graphql";
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
  const entityData = useMaybeFragment<LinkTargetTypeaheadFragment$key>(
    fragment,
    data
  );
  const optionsData = useMaybeFragment<LinkTargetTypeaheadDataFragment$key>(
    targetDataFragment,
    entityData?.linkTargetCandidates
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

type LinkTargetEdge = LinkTargetTypeaheadDataFragment$data["edges"][number];

export default LinkTargetTypeahead;

const targetDataFragment = graphql`
  fragment LinkTargetTypeaheadDataFragment on LinkTargetCandidateConnection {
    edges {
      node {
        kind
        title
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

const fragment = graphql`
  fragment LinkTargetTypeaheadFragment on AnyEntity {
    ... on Item {
      linkTargetCandidates {
        ...LinkTargetTypeaheadDataFragment
      }
    }
    ... on Collection {
      linkTargetCandidates {
        ...LinkTargetTypeaheadDataFragment
      }
    }
  }
`;
