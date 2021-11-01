import React, { useCallback, useEffect } from "react";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { graphql } from "react-relay";
import { LoadingCircle } from "components/atomic";
import { useRouter } from "next/router";
import { RouteHelper } from "routes";
import { CollectionSlugRedirectFragment$key } from "@/relay/CollectionSlugRedirectFragment.graphql";

function CollectionSlugRedirect({ data }: Props) {
  const slug = useRouteSlug();
  const router = useRouter();

  const collection = useMaybeFragment<CollectionSlugRedirectFragment$key>(
    fragment,
    data
  );

  const redirect = useCallback(
    (slug: string, routeName: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.replace({
        pathname: newRoute?.path,
        query: { slug },
      });
    },
    [router]
  );

  useEffect(() => {
    // Check if we're getting cached data by comparing slugs
    if (!collection || collection?.slug !== slug) return;
    const total = collection?.collections?.pageInfo?.totalCount;

    if (total === 0) {
      redirect(slug, "collection.child.items");
    } else {
      redirect(slug, "collection.child.collections");
    }
  }, [collection, slug, redirect]);

  return <LoadingCircle />;
}

interface Props {
  data?: CollectionSlugRedirectFragment$key | null;
}

const fragment = graphql`
  fragment CollectionSlugRedirectFragment on Collection {
    slug
    collections {
      pageInfo {
        totalCount
      }
    }
  }
`;

export default CollectionSlugRedirect;
