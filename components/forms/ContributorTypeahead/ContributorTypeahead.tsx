import React, { Ref } from "react";
import { Controller } from "react-hook-form";
import { graphql } from "react-relay";
import get from "lodash/get";
import { QueryWrapper } from "components/api";
import { Forms } from "components/api/MutationForm";

import type { ContributorTypeaheadQuery as Query } from "__generated__/ContributorTypeaheadQuery.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName";
type TypeaheadProps = React.ComponentProps<typeof Forms.Typeahead>;

const ContributorTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>
) => {
  function getOptions(data: Query["response"]) {
    const options = data.contributors.nodes.map((node: ContributorNode) => {
      return {
        label: getContributorDisplayName(node) || "",
        value: get(node, "id", ""),
      };
    });

    return options;
  }

  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ field }) => (
        <QueryWrapper<Query> query={query}>
          {({ data }) =>
            data?.contributors?.nodes ? (
              <Forms.Typeahead
                label={label}
                options={getOptions(data)}
                {...field}
              />
            ) : null
          }
        </QueryWrapper>
      )}
    />
  );
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
}

type ContributorNode = Query["response"]["contributors"]["nodes"][number];

export default ContributorTypeahead;

// Currently limited to 50 contributors per query
const query = graphql`
  query ContributorTypeaheadQuery {
    contributors {
      nodes {
        __typename
        ... on OrganizationContributor {
          id
          legalName
        }
        ... on PersonContributor {
          id
          givenName
          familyName
        }
      }
    }
  }
`;
