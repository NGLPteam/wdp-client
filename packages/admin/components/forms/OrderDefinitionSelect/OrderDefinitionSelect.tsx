import React, { forwardRef, Ref, useMemo, useRef } from "react";
import { graphql, useFragment } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import Select from "../Select";
import OrderDefinitionSelectedList from "./OrderDefinitionSelectedList";
import * as Styled from "./OrderDefinitionSelect.styles";
import {
  OrderDefinition,
  OrderingSchemaFilterInput,
} from "types/graphql-schema";
import { OrderDefinitionSelectQuery as Query } from "@/relay/OrderDefinitionSelectQuery.graphql";
import { OrderDefinitionSelectFragment$key } from "@/relay/OrderDefinitionSelectFragment.graphql";

const ORDER_PATHS =
  process.env.NEXT_PUBLIC_ORDER_PATH_OPTIONS?.split(",") || [];
const ORDER_PATH_OPTIONS = [
  "entity.created_at",
  "entity.published",
  "entity.title",
  "entity.updated_at",
  "props.volume.sortable_number",
  "props.sortable_number",
  "props.id",
  ...ORDER_PATHS,
];

function OrderDefinitionSelect(
  { name, data, value = [], onChange }: Props,
  ref: Ref<HTMLSelectElement>
) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // Get the entity schema ranks
  const entity = useFragment<OrderDefinitionSelectFragment$key>(fragment, data);

  // Get the list of possible orders by schema ranks
  const { data: orderingData } = useAuthenticatedQuery<Query>(query, {
    schemas: entity.schemaRanks as OrderingSchemaFilterInput[],
  });

  // Get the options from orderingPaths, and format as OrderDefinitionInput
  const options = useMemo(() => {
    return orderingData
      ? orderingData.orderingPaths
          // Filter out repeating paths
          .filter((o, i, self) => {
            return (
              o.path &&
              i === self.findIndex((t) => t.path === o.path) &&
              (!ORDER_PATH_OPTIONS || ORDER_PATH_OPTIONS.includes(o.path))
            );
          })
          // Map to select object
          .map((o) => ({
            label: o.labelPrefix
              ? `${o.labelPrefix}: ${o.label}`
              : o.label || "",
            value:
              o.grouping !== "ENTITY" && o.type
                ? `${o.path}#${o.type.toLowerCase()}`
                : o.path || "",
          }))
          .sort((a, b) => (a.label < b.label ? -1 : 1))
      : [];
  }, [orderingData]);

  // Filter the options by duplicates and the current selected values
  const filteredOptions = useMemo(() => {
    if (!value) return options;

    return options.filter(
      (o) => value.findIndex((v) => v.path === o.value) < 0
    );
  }, [options, value]);

  // Add a new order and pass value to form
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const path = e.target.value;

    if (!path || (value && value.findIndex((v) => v.path === path) >= 0))
      return;

    const newValue = [
      ...value,
      { path, direction: "ASCENDING" } as OrderDefinition,
    ];

    // Reset select value
    if (selectRef.current) selectRef.current.value = "";

    onChange(newValue);
  }

  return (
    <Styled.Wrapper>
      {options && (
        <Select
          label="forms.fields.order_by"
          description="forms.fields.order_by_description"
          name={name}
          onChange={handleSelect}
          options={filteredOptions}
          placeholder="Select an option"
          ref={(e) => {
            if (typeof ref === "function") ref(e);
            selectRef.current = e;
          }}
          disabled={value.length === 7}
        />
      )}
      <OrderDefinitionSelectedList
        value={value}
        options={options}
        onChange={onChange}
      />
    </Styled.Wrapper>
  );
}

interface Props {
  name: string;
  data: OrderDefinitionSelectFragment$key;
  value: OrderDefinition[];
  /** Returns the current value */
  onChange: (value: OrderDefinition[]) => void;
}

export default forwardRef(OrderDefinitionSelect);

const fragment = graphql`
  fragment OrderDefinitionSelectFragment on Entity {
    schemaRanks {
      namespace
      identifier
    }
  }
`;

const query = graphql`
  query OrderDefinitionSelectQuery($schemas: [OrderingSchemaFilterInput!]) {
    orderingPaths(schemas: $schemas) {
      ... on StaticOrderingPath {
        path
        labelPrefix
        label
        description
        grouping
        type
      }

      ... on SchemaOrderingPath {
        path
        labelPrefix
        label
        description
        grouping
        type
      }
    }
  }
`;
