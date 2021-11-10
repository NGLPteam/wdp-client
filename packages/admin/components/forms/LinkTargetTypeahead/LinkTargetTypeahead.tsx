import React, { useMemo, useState } from "react";
import { graphql } from "react-relay";
import { debounce } from "lodash";
import type { FieldValues, Control, Path } from "react-hook-form";
import { Controller } from "react-hook-form";
import useAuthenticatedQuery from "@wdp/lib/api/hooks/useAuthenticatedQuery";
import { useMaybeFragment } from "hooks";
import { LinkTargetTypeaheadQuery as Query } from "@/relay/LinkTargetTypeaheadQuery.graphql";
import {
  LinkTargetTypeaheadFragment$data,
  LinkTargetTypeaheadFragment$key,
} from "@/relay/LinkTargetTypeaheadFragment.graphql";
import BaseTypeahead from "components/forms/BaseTypeahead";
type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;
type Edge = LinkTargetTypeaheadFragment$data["edges"][number];

const LinkTargetTypeahead = <T extends FieldValues = FieldValues>({
  slug,
  name,
  control,
  label,
  disabled,
  required,
}: Props<T>) => {
  const [variables, setVariables] = useState({ slug, title: "" });
  const { data, isLoading } = useAuthenticatedQuery<Query>(query, variables);

  const optionsData = useMaybeFragment<LinkTargetTypeaheadFragment$key>(
    fragment,
    data?.collection?.linkTargetCandidates || data?.item?.linkTargetCandidates
  );

  const options = useMemo(() => {
    const options = optionsData?.edges?.map((edge: Edge) => {
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

  const handleChange = debounce((value) => {
    setVariables({ ...variables, title: value });
  }, 300);

  return (
    <>
      <Controller<T>
        name={name}
        control={control}
        render={({ field }) => (
          <BaseTypeahead
            label={label}
            options={options}
            disabled={disabled}
            onInputChange={handleChange}
            isLoading={isLoading}
            required={required}
            {...field}
          />
        )}
      />
    </>
  );
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  data?: LinkTargetTypeaheadFragment$key | null;
  control: Control<T>;
  name: Path<T>;
  slug: string;
}

export default LinkTargetTypeahead;

const query = graphql`
  query LinkTargetTypeaheadQuery($slug: Slug!, $title: String) {
    collection(slug: $slug) {
      linkTargetCandidates(title: $title) {
        ...LinkTargetTypeaheadFragment
      }
    }
    item(slug: $slug) {
      linkTargetCandidates(title: $title) {
        ...LinkTargetTypeaheadFragment
      }
    }
  }
`;

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
