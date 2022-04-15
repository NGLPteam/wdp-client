import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import { filterSearchableProperties } from "@wdp/lib/search";
import flatMap from "lodash/flatMap";
import uniqBy from "lodash/uniqBy";
import SearchFilter from "../SearchFilter";
import SearchOrderBy from "../SearchOrderBy";
import * as Styled from "./SearchFilters.styles";
import { Fieldset } from "components/forms";
import { Button } from "components/atomic";
import {
  SearchFiltersFragment$data,
  SearchFiltersFragment$key,
} from "@/relay/SearchFiltersFragment.graphql";

export default function SearchFilters({ data, id }: Props) {
  const searchData = useFragment<SearchFiltersFragment$key>(fragment, data);

  const { t } = useTranslation();

  const router = useRouter();

  const methods = useForm({
    shouldUseNativeValidation: true,
    defaultValues: {
      ...(router.query.filters && {
        ...JSON.parse(String(router.query.filters)),
      }),
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: Record<string, string>) => {
    removeEmptyKeys(data);

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          filters: JSON.stringify(data),
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleReset = (e: React.MouseEvent) => {
    e.preventDefault();
    methods.reset({});
    const query = router.query;
    delete query.filters;

    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    );
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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Filters id={id}>
          <SearchOrderBy />
          {searchData && (
            <Fieldset legend={t("filter.results_header")}>
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
            Submit
          </Button>
          <Button type="reset" secondary size="sm" onClick={handleReset}>
            Clear Filters
          </Button>
        </Styled.FormButtons>
      </form>
    </FormProvider>
  );
}

interface Props {
  data: SearchFiltersFragment$key;
  /** a11y ID for form compontents */
  id?: string;
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
