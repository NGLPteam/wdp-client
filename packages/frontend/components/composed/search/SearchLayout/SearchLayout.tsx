"use client";

import { useTransition } from "react";
import classNames from "classnames";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { graphql, useRefetchableFragment } from "react-relay";
import { useForm } from "react-hook-form";
import { useDialogState, DialogDisclosure } from "reakit/Dialog";
import BaseDrawer from "components/layout/BaseDrawer";
import { Button } from "components/atomic";
import { NoContent } from "components/layout";
import routeQueryArrayToString from "@wdp/lib/routes/helpers/routeQueryArrayToString";
import { getPredicates } from "helpers/search";
import { EntityOrder } from "types/graphql-schema";
import { SearchLayoutFragment$key } from "@/relay/SearchLayoutFragment.graphql";
import { SearchLayoutEntityFragment$key } from "@/relay/SearchLayoutEntityFragment.graphql";
import { SearchLayoutQuery } from "@/relay/SearchLayoutQuery.graphql";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import SearchFilters from "../SearchFilters";
import styles from "./SearchLayout.module.css";

export default function SearchLayout({ data, scoped }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchGlobalData, refetchGlobal] = useRefetchableFragment<
    SearchLayoutQuery,
    SearchLayoutFragment$key
  >(fragment, scoped ? null : data);

  const [searchEntityData, refetchEntity] = useRefetchableFragment<
    SearchLayoutQuery,
    SearchLayoutEntityFragment$key
  >(entityFragment, scoped ? data : null);

  const search = scoped ? searchEntityData?.search : searchGlobalData?.search;

  const [isPending, startTransition] = useTransition();

  const dialog = useDialogState({ animated: true });

  const { register, handleSubmit } = useForm({
    shouldUseNativeValidation: true,
  });

  const noSearchQuery =
    (!searchParams.get("q") || searchParams.get("q") === "") &&
    !searchParams.get("filters") &&
    !searchParams.get("schema");

  const doRefetch = (params: URLSearchParams) => {
    const filters = params.get("filters")
      ? routeQueryArrayToString(params.get("filters"))
      : null;
    const page = routeQueryArrayToString(params.get("page"));
    const q = routeQueryArrayToString(params.get("q"));
    const order = routeQueryArrayToString(params.get("order")) as EntityOrder;
    const schema = params.get("schema")?.split(",");

    const predicates = filters ? getPredicates(JSON.parse(filters)) : [];

    const queryVars = {
      query: q || "",
      predicates: predicates || [],
      page: parseInt(page) || 1,
      order: order || ("PUBLISHED_ASCENDING" as EntityOrder),
      schema,
    };

    const refetch = scoped ? refetchEntity : refetchGlobal;

    startTransition(() => {
      refetch(queryVars);
      return;
    });
  };

  const onQuerySubmit = (data: { q?: string }) => {
    const params = new URLSearchParams(searchParams);
    if (data.q) {
      params.set("q", data.q);
    } else {
      params.delete("q");
    }
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
    doRefetch(params);
  };

  return (
    <section className="a-bg-neutral00">
      <div className={classNames("l-container-wide", styles.inner)}>
        <div className={styles.search}>
          <form onSubmit={handleSubmit(onQuerySubmit)}>
            <SearchBar
              id="searchPageInput"
              defaultValue={searchParams.get("q") ?? undefined}
              {...register("q")}
            />
          </form>
        </div>
        <div className={styles.filterToggle}>
          <DialogDisclosure
            as={Button}
            {...dialog}
            size="sm"
            icon="hamburger"
            secondary
          >
            Show Filters
          </DialogDisclosure>
        </div>
        <div className={styles.sidebar}>
          {search && <SearchFilters id="sidebarFilters" data={search} />}
        </div>
        <div className={styles.results}>
          {noSearchQuery ? (
            <NoContent message="search.start_search" />
          ) : (
            <SearchResults data={search?.results} isLoading={isPending} />
          )}
        </div>
      </div>
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

type Props = EntityProps | GlobalProps;

interface EntityProps {
  data: SearchLayoutEntityFragment$key;
  scoped: true;
}

interface GlobalProps {
  data: SearchLayoutFragment$key;
  scoped?: false;
}

const fragment = graphql`
  fragment SearchLayoutFragment on Query
  @refetchable(queryName: "SearchLayoutQuery")
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

const entityFragment = graphql`
  fragment SearchLayoutEntityFragment on Entity
  @refetchable(queryName: "SearchLayoutEntityQuery")
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
