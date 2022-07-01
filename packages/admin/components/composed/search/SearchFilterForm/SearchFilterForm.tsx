import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import uniqBy from "lodash/uniqBy";
import flatMap from "lodash/flatMap";
import { filterSearchableProperties } from "@wdp/lib/search";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import { useRouter } from "next/router";
import omitBy from "lodash/omitBy";
import { normalizeRouteQueryArray } from "@wdp/lib/routes";
import SearchFilter from "../SearchFilter";
import SearchSchemaFilter from "../SearchSchemaFilter";
import * as Styled from "./SearchFilterForm.styles";
import { Grid } from "components/forms";
import { NullForm } from "components/api";
import {
  SearchFilterFormFragment$data,
  SearchFilterFormFragment$key,
} from "@/relay/SearchFilterFormFragment.graphql";

export default function SearchFilterForm({ data, onSuccess, onCancel }: Props) {
  const searchData = useMaybeFragment(fragment, data);

  const router = useRouter();

  const defaultValues = {
    ...(router.query.filters && {
      ...JSON.parse(String(router.query.filters)),
    }),
    schema: normalizeRouteQueryArray(router.query.schema),
  };

  const onSubmit = (data: Record<string, string>) => {
    removeEmptyKeys(data);

    const cleanedQuery = omitBy(router.query, (value, key) => {
      return key && typeof key === "string" && key.startsWith("drawer");
    });

    const { schema, ...filters } = data;

    if (onSuccess) onSuccess();

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanedQuery,
          page: 1,
          filters: JSON.stringify(filters),
          schema,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const onReset = () => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          page: 1,
          filters: null,
          schema: null,
        },
      },
      undefined,
      { shallow: true }
    );
    if (onCancel) onCancel();
  };

  const schemaProps = useMemo(() => {
    if (!searchData) return [];

    const flat = flatMap(searchData.schemas, (props) => {
      return props.searchableProperties;
    });

    return filterSearchableProperties<Node>(uniqBy(flat, "searchPath"));
  }, [searchData]);

  const coreProps = useMemo(() => {
    if (!searchData) return [];

    return filterSearchableProperties<Node>(searchData?.coreProperties);
  }, [searchData]);

  return (
    <NullForm
      onSubmit={onSubmit}
      onCancel={onCancel}
      onReset={onReset}
      resetLabel="search.clear_filters"
      submitLabel={"apply filters"}
      defaultValues={defaultValues}
    >
      {() => (
        <>
          <Grid>
            <Styled.FilterGroup>
              <Styled.GroupLabel className="t-label-lg">
                Publication:
              </Styled.GroupLabel>
              <Styled.FieldsWrapper>
                {coreProps.map((prop: Node, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
                {schemaProps.map((prop: Node, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
              </Styled.FieldsWrapper>
            </Styled.FilterGroup>
            <Styled.FilterGroup>
              <Styled.GroupLabel className="t-label-lg">
                Schema:
              </Styled.GroupLabel>
              <Styled.FieldsWrapper>
                {searchData && <SearchSchemaFilter data={searchData} />}
              </Styled.FieldsWrapper>
            </Styled.FilterGroup>
          </Grid>
        </>
      )}
    </NullForm>
  );
}

type Props = {
  data?: SearchFilterFormFragment$key | null;
  onSuccess?: () => void;
  onCancel?: () => void;
};

type Node = SearchFilterFormFragment$data["coreProperties"][number];

const fragment = graphql`
  fragment SearchFilterFormFragment on SearchScope {
    coreProperties {
      ... on SearchableProperty {
        searchPath
      }
      ...SearchFilterFragment
    }
    schemas: availableSchemaVersions {
      searchableProperties {
        ... on SearchableProperty {
          searchPath
          label
        }
        ...SearchFilterFragment
      }
    }
    ...SearchSchemaFilterFragment
  }
`;
