import React, { useMemo } from "react";
import { useMaybeFragment } from "@wdp/lib/api/hooks";
import { graphql } from "react-relay";
import uniqBy from "lodash/uniqBy";
import flatMap from "lodash/flatMap";
import { filterSearchableProperties } from "@wdp/lib/search";
import { removeEmptyKeys } from "@wdp/lib/helpers";
import { useRouter } from "next/router";
import omitBy from "lodash/omitBy";
import SearchFilter from "../SearchFilter";
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
  };

  const onSubmit = (data: Record<string, string>) => {
    removeEmptyKeys(data);

    const cleanedQuery = omitBy(router.query, (value, key) => {
      return key && typeof key === "string" && key.startsWith("drawer");
    });

    if (onSuccess) onSuccess();

    router.push(
      {
        pathname: router.pathname,
        query: {
          ...cleanedQuery,
          page: 1,
          filters: JSON.stringify(data),
        },
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
      defaultValues={defaultValues}
    >
      {() => (
        <>
          <Grid>
            {coreProps.map((prop: Node, i: number) => (
              <SearchFilter key={i} data={prop} />
            ))}
            {schemaProps.map((prop: Node, i: number) => (
              <SearchFilter key={i} data={prop} />
            ))}
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
  }
`;
