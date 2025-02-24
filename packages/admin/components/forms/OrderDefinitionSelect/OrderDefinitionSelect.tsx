import { forwardRef, Ref, useMemo, useRef, useEffect, useState } from "react";
import { readInlineData, graphql, fetchQuery } from "relay-runtime";
import {
  OrderingSchemaFilterInput,
  OrderDefinition,
} from "types/graphql-schema";
import { t } from "i18next";
import { useFormContext } from "react-hook-form";
import { default as getRelayEnvironment } from "@wdp/lib/app/buildEnvironment";
import capitalize from "lodash/capitalize";
import {
  OrderDefinitionSelectQuery as Query,
  OrderDefinitionSelectQuery$data,
} from "@/relay/OrderDefinitionSelectQuery.graphql";
import { OrderDefinitionSelectOrderingPathFragment$key } from "@/relay/OrderDefinitionSelectOrderingPathFragment.graphql";
import Select from "../Select";
import OrderDefinitionSelectedList from "./OrderDefinitionSelectedList";
import * as Styled from "./OrderDefinitionSelect.styles";

function OrderDefinitionSelect(
  { name, value = [], onChange }: Props,
  ref: Ref<HTMLSelectElement>,
) {
  const selectRef = useRef<HTMLSelectElement | null>(null);

  const { watch } = useFormContext();

  const schemasValue = watch("filterSchemas");

  const [orderingData, setOrderingData] = useState<
    OrderDefinitionSelectQuery$data | undefined
  >();

  useEffect(() => {
    const fetchOptions = async () => {
      const env = getRelayEnvironment();

      const schemas = schemasValue
        ? typeof schemasValue === "string"
          ? [JSON.parse(schemasValue)]
          : schemasValue.map((schema: string) => JSON.parse(schema))
        : [{ namespace: "default", identifier: "collection" }];

      let data;

      try {
        data = await fetchQuery<Query>(
          env,
          query,
          {
            schemas: (schemas || []) as OrderingSchemaFilterInput[],
          },
          {
            networkCacheConfig: { force: false },
          },
        )
          .toPromise()
          .then((result) => {
            return result;
          });
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.log(error);
      }

      setOrderingData(data);
    };

    fetchOptions();
  }, [schemasValue]);

  const options = useMemo(() => {
    return orderingData
      ? orderingData.orderingPaths
          .map((o) => {
            const orderingPath =
              readInlineData<OrderDefinitionSelectOrderingPathFragment$key>(
                fragment,
                o,
              );
            return {
              label: capitalize(
                orderingPath.path
                  .replaceAll(".", " - ")
                  .replaceAll("_", " ")
                  .split("#")[0],
              ),
              value: orderingPath.path,
            };
          })
          .sort((a, b) => (a.label < b.label ? -1 : 1))
      : [];
  }, [orderingData]);

  // Filter the options by current selected values
  const filteredOptions = useMemo(() => {
    if (!value) return options;

    return options.filter(
      (o) => value.findIndex((v) => v.path === o.value) < 0,
    );
  }, [options, value]);

  // Add a new order and pass value to form
  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const path = e.target.value;

    if (!path || (value && value.findIndex((v) => v.path === path) >= 0))
      return;

    const newValue = [
      ...value,
      {
        path,
        direction: "ASCENDING" as const,
      },
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
          options={[
            { label: t("forms.fields.select_placeholder"), value: "" },
            ...filteredOptions,
          ]}
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
  value: OrderDefinition[];
  /** Returns the current value */
  onChange: (value: Omit<OrderDefinition, "nulls">[]) => void;
}

export default forwardRef(OrderDefinitionSelect);

const fragment = graphql`
  fragment OrderDefinitionSelectOrderingPathFragment on OrderingPath @inline {
    path
    labelPrefix
    label
    description
    grouping
    type
  }
`;

const query = graphql`
  query OrderDefinitionSelectQuery($schemas: [OrderingSchemaFilterInput!]) {
    orderingPaths(schemas: $schemas) {
      ... on StaticOrderingPath {
        ...OrderDefinitionSelectOrderingPathFragment
      }
      ... on SchemaOrderingPath {
        ...OrderDefinitionSelectOrderingPathFragment
      }
      ... on AncestorStaticOrderingPath {
        ...OrderDefinitionSelectOrderingPathFragment
      }
      ... on AncestorSchemaOrderingPath {
        ...OrderDefinitionSelectOrderingPathFragment
      }
    }
  }
`;
