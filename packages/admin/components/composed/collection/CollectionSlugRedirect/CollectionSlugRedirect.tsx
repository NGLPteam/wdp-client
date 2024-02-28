import React, { useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { LoadingCircle } from "components/atomic";
import { RouteHelper } from "routes";
import { CollectionSlugRedirectFragment$key } from "@/relay/CollectionSlugRedirectFragment.graphql";

function CollectionSlugRedirect({ data }: Props) {
  const slug = useRouteSlug();
  const router = useRouter();

  const collection = useMaybeFragment<CollectionSlugRedirectFragment$key>(
    fragment,
    data,
  );

  const redirect = useCallback(
    (slug: string, routeName: string) => {
      const newRoute = RouteHelper.findRouteByName(routeName);

      router.replace({
        pathname: newRoute?.path,
        query: { slug },
      });
    },
    [router],
  );

  useEffect(() => {
    // Check if we're getting cached data by comparing slugs
    if (!collection || collection?.slug !== slug) return;
    const totalCollections = collection?.collections?.pageInfo?.totalCount;
    const totalItems = collection?.items?.pageInfo?.totalCount;

    if (totalCollections > 0) {
      redirect(slug, "collection.child.collections");
    } else if (totalItems > 0) {
      redirect(slug, "collection.child.items");
    } else {
      redirect(slug, "collection.manage.details");
    }
  }, [collection, slug, redirect]);

  return <LoadingCircle className="l-page-loading" />;
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
    items {
      pageInfo {
        totalCount
      }
    }
  }
`;

export default CollectionSlugRedirect;
