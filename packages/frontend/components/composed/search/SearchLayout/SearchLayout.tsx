import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import { graphql, useFragment } from "react-relay";
import { useForm } from "react-hook-form";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import SearchFilters from "../SearchFilters";
import * as Styled from "./SearchLayout.styles";
import BaseDrawer from "components/layout/BaseDrawer";
import { Button } from "components/atomic";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";
import useSearchQueryVars from "hooks/useSearchQueryVars";
import { NoContent } from "components/layout";

export default function SearchLayout({ data, refetch, isLoading }: Props) {
  const router = useRouter();

  const searchData = useFragment(fragment, data);

  const search = searchData?.search;

  const dialog = useDialogState({ animated: true });

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const handleRefetch = useCallback(
    (vars = {}) => refetch({ ...vars }),
    [refetch]
  );

  const queryVars = useSearchQueryVars();

  const noSearchQuery =
    queryVars.query === "" &&
    (!queryVars.predicates || queryVars.predicates.length === 0);

  useEffect(() => {
    handleRefetch(queryVars);
  }, [queryVars, handleRefetch]);

  const onQuerySubmit = async (data: { q?: string }) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          q: data.q,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <section className="a-bg-neutral00">
      <Styled.Inner className="l-container-wide">
        <Styled.Search>
          <form onSubmit={handleSubmit(onQuerySubmit)}>
            <SearchBar
              id="searchPageInput"
              defaultValue={router.query.q}
              {...register("q")}
            />
          </form>
        </Styled.Search>
        <Styled.FiltersToggle>
          <DialogDisclosure
            as={Button}
            {...dialog}
            size="sm"
            icon="hamburger"
            secondary
          >
            Show Filters
          </DialogDisclosure>
        </Styled.FiltersToggle>
        <Styled.Sidebar>
          {search && <SearchFilters id="sidebarFilters" data={search} />}
        </Styled.Sidebar>
        <Styled.Results>
          {noSearchQuery ? (
            <NoContent message="search.start_search" />
          ) : (
            <SearchResults data={search?.results} isLoading={isLoading} />
          )}
        </Styled.Results>
      </Styled.Inner>
      <BaseDrawer label="Filters" dialog={dialog}>
        {search && (
          <SearchFilters
            id="mobileFilters"
            data={search}
            onSubmit={() => dialog.hide()}
          />
        )}
      </BaseDrawer>
    </section>
  );
}

interface Props {
  data: SearchLayoutFragment$key;
  refetch: (vars: Record<string, string>) => void;
  isLoading?: boolean;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Searchable
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    schema: { type: "[String!]", defaultValue: [] }
  ) {
    search {
      results(
        query: $query
        page: $page
        perPage: 20
        predicates: $predicates
        order: $order
        schema: $schema
      ) {
        ...SearchResultsFragment
      }
      ...SearchFiltersFragment
    }
  }
`;
