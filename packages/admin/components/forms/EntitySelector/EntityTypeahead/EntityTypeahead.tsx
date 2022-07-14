import React, { useState, useEffect } from "react";
import { QueryWrapper } from "@wdp/lib/api/components";
import { graphql } from "react-relay";
import type { FieldValues, Path } from "react-hook-form";
import EntitySelectorController from "../EntitySelectorController";
import type { EntityOption } from "../EntitySelectorController";
import BaseTypeahead from "components/forms/BaseTypeahead";
import {
  EntityTypeaheadQuery as Query,
  EntityTypeaheadQueryResponse as Response,
} from "__generated__/EntityTypeaheadQuery.graphql";
import type { EntityDescendantScopeFilter } from "types/graphql-schema";

type TypeaheadProps = React.ComponentProps<typeof BaseTypeahead>;
type EntitySelectorProps = React.ComponentProps<
  typeof EntitySelectorController
>;

const EntityTypeahead = <T extends FieldValues = FieldValues>({
  name,
  selected,
  onSelect,
  selectableTypes,
}: Props<T>) => {
  const [q, setQ] = useState("a");
  const [value, setValue] = useState(selected?.id ?? "");

  useEffect(() => {
    if (selected?.id && selected?.id !== value) setValue(selected.id);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [selected?.id]);

  const onInputChange =
    (options?: { label: string; value: string }[]) => (val: string) => {
      if (options?.find((option) => option?.label === val)) return;
      setQ(val);
      setValue(val);
    };

  const formatOptions = (data: Response) => {
    if (!data || !data.search?.results?.edges?.length) return;

    const results = data.search.results.edges;
    const applyKind = selectableTypes?.kinds?.length
      ? results.filter(({ node }) =>
          selectableTypes?.kinds?.includes(
            node.entity?.__typename?.toUpperCase() ?? ""
          )
        )
      : results;
    const options = applyKind.map(({ node }) => {
      return {
        label: node.title || "",
        value: node.entity.id ?? "",
      };
    });
    return value === selected?.id
      ? [{ label: selected.title ?? "", value: selected.id ?? "" }]
      : options;
  };

  const initialVariables = {
    query: q,
    schema: selectableTypes?.schemas || [],
    scope: (selectableTypes?.kinds?.length
      ? selectableTypes.kinds[0]
      : "ALL") as EntityDescendantScopeFilter,
  };

  const handleSelect = (data: Response) => (optionVal: string | number) => {
    const node = data.search.results.edges.find(
      ({ node }) => node.entity?.id === optionVal
    )?.node;
    const entity = node
      ? ({
          id: node.entity.id,
          slug: node.slug,
          title: node.title,
        } as EntityOption)
      : selected;
    return onSelect(entity);
  };

  return (
    <QueryWrapper<Query> query={query} initialVariables={initialVariables}>
      {({ data }) => {
        /* eslint-disable @typescript-eslint/no-empty-function */
        const handleSelectWithData = data ? handleSelect(data) : () => {};
        return (
          <BaseTypeahead
            label={""}
            hideLabel
            name={name}
            options={data ? formatOptions(data) : []}
            onInputChange={
              data ? onInputChange(formatOptions(data)) : undefined
            }
            onChange={(val) => handleSelectWithData(val)}
            value={value}
            withBrowse
          />
        );
      }}
    </QueryWrapper>
  );
};

interface Props<T> extends Omit<TypeaheadProps, "options" | "name" | "label"> {
  name: Path<T>;
  selected: EntityOption | undefined;
  onSelect: (entity: EntityOption | undefined) => void;
  selectableTypes?: EntitySelectorProps["selectableTypes"];
}

export default EntityTypeahead;

const query = graphql`
  query EntityTypeaheadQuery(
    $query: String!
    $schema: [String!]
    $scope: EntityDescendantScopeFilter!
  ) {
    search(visibility: ALL) {
      results(
        prefix: $query
        page: 1
        perPage: 25
        order: TITLE_ASCENDING
        schema: $schema
        scope: $scope
      ) {
        edges {
          node {
            title
            slug
            entity {
              ... on Node {
                id
                __typename
              }
            }
          }
        }
      }
    }
  }
`;
