import React, { useState, useEffect, useMemo, useDeferredValue } from "react";
import { graphql } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import BaseTypeahead from "components/forms/BaseTypeahead";
import {
  EntityTypeaheadQuery as Query,
  EntityTypeaheadQuery$data as Response,
} from "__generated__/EntityTypeaheadQuery.graphql";
import debounce from "lodash/debounce";
import EntitySelectorController from "../EntitySelectorController";
import type { EntityOption } from "../EntitySelectorController";
import type { FieldValues, Path } from "react-hook-form";
import type { EntityDescendantScopeFilter } from "types/graphql-schema";
import type { TypeaheadOption } from "components/forms/BaseTypeahead";

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
  const [value, setValue] = useState(selected?.id ?? "");

  const [variables, setVariables] = useState({
    query: "",
    schema: selectableTypes?.schemas || [],
    scope: (selectableTypes?.kinds?.length
      ? selectableTypes.kinds[0]
      : "ALL") as EntityDescendantScopeFilter,
  });

  const data = useAuthenticatedQuery<Query>(query, variables, {
    skip: !variables.query,
  });
  const deferred = useDeferredValue(data);

  useEffect(() => {
    // TODO: This is where the value is getting set as an ID from the selector
    // The base typeahead doesn't have the name of the item unless it's in the list of options.
    // For some reason, when an initial search is made with a query, it magically finds the item.
    if (selected?.id && selected?.id !== value) setValue(selected.id);
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [selected?.id]);

  const options = useMemo(() => {
    // If there's no data, but there is a selected value, return the
    // selected value's label and id.
    let options: TypeaheadOption[] = [];

    if (deferred && deferred.search?.results?.edges?.length) {
      const results = deferred.search.results.edges;
      const applyKind = selectableTypes?.kinds?.length
        ? results.filter(({ node }) =>
            selectableTypes?.kinds?.includes(
              node.entity?.__typename?.toUpperCase() ?? "",
            ),
          )
        : results;
      options = applyKind.map(({ node }) => {
        return {
          label: node.title || "",
          value: node.entity.id ?? "",
        };
      });
    }

    return value === selected?.id
      ? [{ label: selected.title ?? "", value: selected.id ?? "" }]
      : options;
  }, [deferred, selectableTypes?.kinds, selected, value]);

  const onInputChange = (val: string) => {
    if (options?.find((option) => option?.label === val)) return;
    debouncedSetVariables(val);
    setValue(val);
  };

  const debouncedSetVariables = debounce(
    (val: string) => setVariables({ ...variables, query: val }),
    300,
  );

  const handleSelect = (data: Response) => (optionVal: string | number) => {
    const node = data.search.results.edges.find(
      ({ node }) => node.entity?.id === optionVal,
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

  const handleSelectWithData = deferred ? handleSelect(deferred) : () => null;

  return (
    <BaseTypeahead
      label={""}
      hideLabel
      name={name}
      options={options}
      onInputChange={onInputChange}
      onChange={(val) => handleSelectWithData(val)}
      value={value}
      withBrowse
    />
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
