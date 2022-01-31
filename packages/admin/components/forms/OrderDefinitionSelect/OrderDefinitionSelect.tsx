import React, { forwardRef, Ref, useMemo, useRef } from "react";
import { graphql, useFragment } from "react-relay";
import { useAuthenticatedQuery } from "@wdp/lib/api/hooks";
import Select from "../Select";
import OrderDefinitionSelectedList from "./OrderDefinitionSelectedList";
import {
  OrderDefinition,
  OrderingSchemaFilterInput,
} from "types/graphql-schema";
import { OrderDefinitionSelectQuery as Query } from "@/relay/OrderDefinitionSelectQuery.graphql";
import { OrderDefinitionSelectFragment$key } from "@/relay/OrderDefinitionSelectFragment.graphql";
import * as Styled from "./OrderDefinitionSelect.styles";

function OrderDefinitionSelect(
  { name, data, value, onChange }: Props,
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
            return i === self.findIndex((t) => t.path === o.path);
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
      : [];
  }, [orderingData]);

  // Filter the options by duplicates and the current selected values
  const filteredOptions = useMemo(() => {
    return options.filter(
      (o) => value.findIndex((v) => v.path === o.value) < 0
    );
  }, [options, value]);

  // Add a new order and pass value to form
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const path = e.target.value;

    if (!path || value.findIndex((v) => v.path === path) >= 0) return;

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
          label="order by"
          name={name}
          onChange={handleSelect}
          options={filteredOptions}
          placeholder="Select an option"
          ref={(e) => {
            if (typeof ref === "function") ref(e);
            selectRef.current = e;
          }}
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
