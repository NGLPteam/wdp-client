import React, { useEffect } from "react";
import { graphql } from "react-relay";
import { useAuthenticatedQuery, useMaybeFragment } from "@wdp/lib/api/hooks";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { EntityOrderingLayoutFactoryFragment$key } from "@/relay/EntityOrderingLayoutFactoryFragment.graphql";
import EntityOrderingLayout from "components/composed/entity/EntityOrderingLayout";
import {
  EntityOrderingLayoutFactoryQuery as Query,
  EntityOrderingLayoutFactoryQueryResponse,
} from "@/relay/EntityOrderingLayoutFactoryQuery.graphql";
import { LoadingBlock } from "components/atomic";
import IssueSidebarNav from "components/composed/issue/IssueSidebarNav";
import IssueOrderingLayout from "components/composed/issue/IssueOrderingLayout";
import { RouteHelper } from "routes";

/**
 * Fetches the ordering data and gets the right layout based on the schema identifier.
 * If no ordering identifier is provided, uses the first ordering on the entity.
 */
export default function EntityOrderingLayoutFactory({ data, ordering }: Props) {
  const entity = useMaybeFragment(fragment, data);

  const { push: routerPush, ...router } = useRouter();

  const initOrdering = !entity?.initialOrdering?.disabled
    ? entity?.initialOrdering?.identifier
    : "";

  const identifier =
    ordering ||
    routeQueryArrayToString(router.query.ordering) ||
    initOrdering ||
    "";

  const slug = routeQueryArrayToString(router.query.slug);

  const page = parseInt(routeQueryArrayToString(router.query.page)) || 1;

  const { data: orderingData, isLoading } = useAuthenticatedQuery<Query>(
    query,
    {
      identifier,
      page,
      slug,
    }
  );

  // If an ordering is disabled, redirect to the parent entity
  useEffect(() => {
    const isDisabled =
      !!orderingData?.collection?.ordering?.disabled ||
      !!orderingData?.community?.ordering?.disabled;

    const route = RouteHelper.findRouteByName(
      orderingData?.collection ? "collection" : "community"
    );

    if (isDisabled) {
      routerPush({ pathname: route?.path || "/", query: { slug } }, undefined, {
        shallow: true,
      });
    }
  }, [orderingData, slug, routerPush]);

  const getLayout = (
    data?: EntityOrderingLayoutFactoryQueryResponse | null
  ) => {
    switch (entity?.schemaDefinition?.identifier) {
      case "journal_issue":
        return (
          <IssueSidebarNav data={entity}>
            {isLoading ? (
              <LoadingBlock />
            ) : (
              <IssueOrderingLayout data={data?.collection?.ordering} />
            )}
          </IssueSidebarNav>
        );

      default:
        return isLoading ? (
          <LoadingBlock />
        ) : (
          <EntityOrderingLayout
            data={data?.community?.ordering || data?.collection?.ordering}
          />
        );
    }
  };

  return entity ? getLayout(orderingData) : <LoadingBlock />;
}

interface Props {
  data?: EntityOrderingLayoutFactoryFragment$key | null;
  ordering?: string;
}

const fragment = graphql`
  fragment EntityOrderingLayoutFactoryFragment on Entity {
    schemaDefinition {
      identifier
    }

    initialOrdering {
      identifier
      disabled
    }

    ...IssueSidebarNavFragment
  }
`;

const query = graphql`
  query EntityOrderingLayoutFactoryQuery(
    $slug: Slug!
    $identifier: String!
    $page: Int
  ) {
    collection(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment @arguments(page: $page)
        ...IssueOrderingLayoutFragment @arguments(page: $page)
      }
    }
    community(slug: $slug) {
      ordering(identifier: $identifier) {
        disabled
        ...EntityOrderingLayoutFragment @arguments(page: $page)
        ...IssueOrderingLayoutFragment @arguments(page: $page)
      }
    }
  }
`;
