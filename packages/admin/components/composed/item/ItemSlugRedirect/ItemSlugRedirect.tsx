import React, { useCallback, useEffect } from "react";
import { graphql } from "react-relay";
import { useRouter } from "next/router";
import { useMaybeFragment, useRouteSlug } from "hooks";
import { LoadingCircle } from "components/atomic";
import { RouteHelper } from "routes";
import { ItemSlugRedirectFragment$key } from "@/relay/ItemSlugRedirectFragment.graphql";

function ItemSlugRedirect({ data }: Props) {
  const slug = useRouteSlug();
  const router = useRouter();

  const item = useMaybeFragment<ItemSlugRedirectFragment$key>(fragment, data);

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
    if (!item || item?.slug !== slug) return;
    const total = item?.items?.pageInfo?.totalCount;

    if (total === 0) {
      redirect(slug, "item.manage.details");
    } else {
      redirect(slug, "item.child.items");
    }
  }, [item, slug, redirect]);

  return <LoadingCircle className="l-page-loading" />;
}

interface Props {
  data?: ItemSlugRedirectFragment$key | null;
}

const fragment = graphql`
  fragment ItemSlugRedirectFragment on Item {
    slug
    items {
      pageInfo {
        totalCount
      }
    }
  }
`;

export default ItemSlugRedirect;
