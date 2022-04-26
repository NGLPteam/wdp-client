import React, { useMemo } from "react";
import flatMap from "lodash/flatMap";
import uniqBy from "lodash/uniqBy";
import { useRouter } from "next/router";
import { filterSearchableProperties } from "@wdp/lib/search";
import { useTranslation } from "react-i18next";
import { graphql, useFragment } from "react-relay";
import * as Styled from "./CurrentSearchFilters.styles";
import { ButtonControl } from "components/atomic";
import {
  CurrentSearchFiltersFragment$data,
  CurrentSearchFiltersFragment$key,
} from "@/relay/CurrentSearchFiltersFragment.graphql";

export default function CurrentFilters({ data }: Props) {
  const searchData = useFragment(fragment, data);

  const { t } = useTranslation();

  const { pathname, query, push } = useRouter();

  const filters = query?.filters ? JSON.parse(String(query.filters)) : [];

  const handleClick = (filterKey: string) => {
    delete filters[filterKey];

    push({
      pathname,
      query: {
        ...query,
        filters: JSON.stringify(filters),
      },
    });
  };

  // Get all filter options in a flat list
  const allFilters = useMemo(() => {
    if (!searchData) return [];

    const flat = flatMap(searchData.schemas, (props) => {
      return props.searchableProperties;
    });

    const schemaProps = filterSearchableProperties<Node>(
      uniqBy(flat, "searchPath")
    );

    const coreProps = filterSearchableProperties<Node>(
      searchData?.coreProperties
    );

    return [...coreProps, ...schemaProps];
  }, [searchData]);

  // Render a label for the current filter
  const renderFilter = (filterKey: string, value: unknown) => {
    const pairs = filterKey.split("--");

    if (pairs.length < 2) return null;

    const path = pairs[0].replace("-", ".");

    const operator = pairs[1];

    const filter = allFilters.find(({ searchPath }) => searchPath === path);

    if (!filter) return null;

    return t("search.filter_name_value", {
      context: operator,
      name: filter?.label || filterKey,
      value,
    });
  };

  return (
    <Styled.Wrapper className="l-flex l-flex--gap-sm">
      {Object.keys(filters).map((filterKey) => {
        const filterLabel = renderFilter(filterKey, filters[filterKey]);

        return filterLabel ? (
          <ButtonControl
            type="button"
            key={filterKey}
            icon="close"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleClick(filterKey);
            }}
          >
            {filterLabel}
          </ButtonControl>
        ) : null;
      })}
    </Styled.Wrapper>
  );
}

interface Props {
  data: CurrentSearchFiltersFragment$key;
}

type Node = CurrentSearchFiltersFragment$data["coreProperties"][number];

const fragment = graphql`
  fragment CurrentSearchFiltersFragment on SearchScope {
    coreProperties {
      ... on SearchableProperty {
        searchPath
        label
      }
    }
    schemas: availableSchemaVersions {
      searchableProperties {
        ... on SearchableProperty {
          searchPath
          label
        }
      }
    }
  }
`;
