"use client";

import { graphql, PreloadedQuery, useQueryLoader } from "react-relay";
import { useCallback, useEffect } from "react";
import {
  ViewCounterQuery,
  ViewCounterQuery$variables,
} from "@/__generated__/ViewCounterQuery.graphql";

/**
 * Records a view for an entity by fetching the typename on the client.
 * Fetches on the server do not count towards view metrics.
 */
export default function ViewCounter({
  slug,
  initialQueryRef,
}: {
  slug: string;
  initialQueryRef?: PreloadedQuery<ViewCounterQuery> | null;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryReference, loadQuery] = useQueryLoader<ViewCounterQuery>(
    query,
    initialQueryRef,
  );

  const fetchQuery = useCallback(
    (variables: ViewCounterQuery$variables) => {
      loadQuery({ ...variables }, { fetchPolicy: "store-and-network" });
    },
    [loadQuery],
  );

  useEffect(() => {
    fetchQuery({ slug });
  }, [fetchQuery, slug]);

  return <></>;
}

const query = graphql`
  query ViewCounterQuery($slug: Slug!) {
    item(slug: $slug) {
      __typename
    }
    collection(slug: $slug) {
      __typename
    }
    community(slug: $slug) {
      __typename
    }
  }
`;
