import React, { Ref, useState } from "react";
import { Controller } from "react-hook-form";
import { QueryWrapper } from "@wdp/lib/api/components";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import debounce from "lodash/debounce";
import BaseTypeahead from "components/forms/BaseTypeahead";
import {
  ItemTypeaheadQuery as Query,
  ItemTypeaheadQuery$data as Response,
} from "__generated__/ItemTypeaheadQuery.graphql";
import type { FieldValues, Control, Path } from "react-hook-form";

type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;

const ItemTypeahead = <T extends FieldValues = FieldValues>(
  { control, name, label, disabled, required }: Props<T>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ref: Ref<HTMLInputElement>,
) => {
  const [q, setQ] = useState("a");

  const formatOptions = (data: Response) => {
    if (!data || !data.search?.results?.edges?.length) return;

    const results = data.search.results.edges;
    const options = results.map(({ node }) => {
      return {
        label: node.title || "",
        value: node.entity.id ?? "",
      };
    });
    return options;
  };

  const { t } = useTranslation();

  const debouncedOnChange = debounce((value) => setQ(value), 500);

  return (
    <QueryWrapper<Query> query={query} initialVariables={{ query: q }}>
      {({ data }) => {
        return (
          <Controller<T>
            name={name}
            control={control}
            rules={{
              validate: (value) => {
                return !!value || (t("forms.validation.item") as string);
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
    </QueryWrapper>
  );
};

interface Props<T extends FieldValues = FieldValues>
  extends Omit<TypeaheadProps, "options" | "name"> {
  control: Control<T>;
  name: Path<T>;
}

export default ItemTypeahead;

const query = graphql`
  query ItemTypeaheadQuery($query: String!) {
    search(visibility: ALL) {
      results(
        prefix: $query
        page: 1
        perPage: 50
        order: TITLE_ASCENDING
        scope: ITEM
      ) {
        edges {
          node {
            title
            entity {
              ... on Node {
                id
              }
            }
          }
        }
      }
    }
  }
`;
