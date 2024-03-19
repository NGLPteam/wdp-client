import React, { Ref, useState } from "react";
import { Controller } from "react-hook-form";
import { LazyLoadQueryWrapper } from "@wdp/lib/api/components";
import { graphql } from "react-relay";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";
import BaseTypeahead from "components/forms/BaseTypeahead";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
import {
  ContributorTypeaheadQuery as Query,
  ContributorTypeaheadQuery$data as Response,
} from "__generated__/ContributorTypeaheadQuery.graphql";
import { FormFieldSkeleton } from "components/atomic/loading";
import type { FieldValues, Control, Path } from "react-hook-form";

type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;

const ContributorTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label, disabled, required }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>,
) => {
  const [q, setQ] = useState("a");

  const formatOptions = (data: Response) => {
    if (!data || !data.contributors?.edges?.length) return;

    const results = data.contributors.edges;
    const options = results.map(({ node }) => {
      return {
        label: getContributorDisplayName(node) || "",
        value: node.__typename !== "%other" ? node.id : "",
      };
    });
    return options;
  };

  const { t } = useTranslation();

  const debouncedOnChange = debounce((value) => setQ(value), 500);

  return (
    <LazyLoadQueryWrapper<Query>
      query={query}
      variables={{ query: q }}
      fallback={<FormFieldSkeleton />}
    >
      {({ data }) => {
        return (
          <Controller<T>
            name={name}
            control={control}
            rules={{
              validate: (value) => {
                return !!value || (t("forms.validation.contributor") as string);
              },
            }}
            render={({ field }) => (
              <BaseTypeahead
                label={label}
                options={data ? formatOptions(data) : []}
                onInputChange={debouncedOnChange}
                disabled={disabled}
                required={required}
                defaultValue={q}
                {...field}
              />
            )}
          />
        );
      }}
    </LazyLoadQueryWrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
}
export default ContributorTypeahead;

const query = graphql`
  query ContributorTypeaheadQuery($query: String!) {
    contributors(prefix: $query, page: 1, perPage: 50, order: NAME_ASCENDING) {
      edges {
        node {
          ... on PersonContributor {
            __typename
            givenName
            familyName
            id
          }
          ... on OrganizationContributor {
            __typename
            legalName
            id
          }
        }
      }
    }
  }
`;
