import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useRouter } from "next/router";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import { filterSearchableProperties } from "@wdp/lib/search";
import flatMap from "lodash/flatMap";
import uniqBy from "lodash/uniqBy";
import { normalizeRouteQueryArray } from "@wdp/lib/routes";
import SearchFilter from "../SearchFilter";
import SearchOrderBy from "../SearchOrderBy";
import SearchSchemaFilter from "../SearchSchemaFilter";
import * as Styled from "./SearchFilters.styles";
import { Fieldset, BaseForm } from "components/forms";
import { Button } from "components/atomic";
import {
  SearchFiltersFragment$data,
  SearchFiltersFragment$key,
} from "@/relay/SearchFiltersFragment.graphql";

export default function SearchFilters({
  data,
  id,
  onSubmit: onSubmitCallback,
}: Props) {
  const searchData = useFragment<SearchFiltersFragment$key>(fragment, data);

  const { t } = useTranslation();

  const router = useRouter();

  const defaultValues = {
    ...(router.query.filters && {
      ...JSON.parse(String(router.query.filters)),
    }),
    schema: normalizeRouteQueryArray(router.query.schema),
  };

  const onSubmit = (data: Record<string, string>) => {
    removeEmptyKeys(data);

    const { schema, ...filters } = data;

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          filters: JSON.stringify(filters),
          schema,
        },
      },
      undefined,
      { shallow: true }
    );

    if (onSubmitCallback) onSubmitCallback();
  };

  const handleReset = () => {
    const query = router.query;
    delete query.filters;
    delete query.schema;

    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    );

    if (onSubmitCallback) onSubmitCallback();
  };

  const schemaProps = useMemo(() => {
    if (!searchData) return [];

    const flat = flatMap(searchData.schemas, (props) => {
      return props.searchableProperties;
    });

    return filterSearchableProperties<FilterNode>(uniqBy(flat, "searchPath"));
  }, [searchData]);

  const coreProps = useMemo(
    () => filterSearchableProperties<FilterNode>(searchData.coreProperties),
    [searchData]
  );

  return (
    <BaseForm onSubmit={onSubmit} defaultValues={defaultValues}>
      {({ form: { reset } }) => (
        <>
          <Styled.Filters id={id}>
            <SearchOrderBy />
            {searchData && (
              <Fieldset legend={t("filter.results_header")}>
                <SearchSchemaFilter data={searchData} />
                {coreProps.map((prop: FilterNode, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
                {schemaProps.map((prop: FilterNode, i: number) => (
                  <SearchFilter key={i} data={prop} />
                ))}
              </Fieldset>
            )}
          </Styled.Filters>
          <Styled.FormButtons>
            <Button type="submit" size="sm">
              {t("common.submit")}
            </Button>
            <Button
              type="reset"
              secondary
              size="sm"
              onClick={() => {
                handleReset();
                reset();
              }}
            >
              {t("filter.clear_filters")}
            </Button>
          </Styled.FormButtons>
        </>
      )}
    </BaseForm>
  );
}

interface Props {
  data: SearchFiltersFragment$key;
  /** a11y ID for form compontents */
  id?: string;
  /** Callback runs on form submit.
   * Used for closing the filter drawer after submission.
   */
  onSubmit?: () => void;
}

type FilterNode = SearchFiltersFragment$data["coreProperties"][number];

const fragment = graphql`
  fragment SearchFiltersFragment on SearchScope {
    coreProperties {
      ... on SearchableProperty {
        searchPath
      }
      ...SearchFilterFragment
    }
    ...SearchSchemaFilterFragment
    schemas: availableSchemaVersions {
      searchableProperties {
        ... on SearchableProperty {
          searchPath
          label
        }
        ...SearchFilterFragment
      }
    }
  }
`;
