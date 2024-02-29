import React, { useMemo, useState } from "react";
import { GraphQLTaggedNode, graphql } from "react-relay";
import { debounce } from "lodash";
import { Controller } from "react-hook-form";
import useAuthenticatedQuery from "@wdp/lib/api/hooks/useAuthenticatedQuery";
import { useTranslation } from "react-i18next";
import { useMaybeFragment } from "hooks";
import BaseTypeahead from "components/forms/BaseTypeahead";
import { getEntityTitle } from "components/factories/EntityTitleFactory";
import { LinkTargetTypeaheadQuery as Query } from "@/relay/LinkTargetTypeaheadQuery.graphql";
import {
  LinkTargetTypeaheadFragment$data,
  LinkTargetTypeaheadFragment$key,
} from "@/relay/LinkTargetTypeaheadFragment.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";

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
  const data = useAuthenticatedQuery<Query>(query, variables);

  const optionsData = useMaybeFragment<LinkTargetTypeaheadFragment$key>(
    fragment as GraphQLTaggedNode,
    data?.collection?.linkTargetCandidates || data?.item?.linkTargetCandidates
  );

  const options = useMemo(() => {
    const options = optionsData?.edges?.map((edge: Edge) => ({
      label: getEntityTitle(edge.node.target),
      value: edge.node.targetId,
    }));

    return options;
  }, [optionsData]);

  const handleChange = debounce((value) => {
    setVariables({ ...variables, title: value });
  }, 300);

  const { t } = useTranslation();

  return (
    <>
      <Controller<T>
        name={name}
        control={control}
        rules={{
          validate: (value) => {
            return !!value || (t("forms.validation.link_target") as string);
          },
        }}
        render={({ field }) => (
          <BaseTypeahead
            label={label}
            options={options}
            disabled={disabled}
            onInputChange={handleChange}
            required={required}
            {...field}
          />
        )}
      />
    </>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
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
          ...getEntityTitleFragment
        }
      }
    }
  }
`;
