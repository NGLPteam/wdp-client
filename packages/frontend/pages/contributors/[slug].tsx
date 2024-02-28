import React from "react";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import {
  ContributorDetailLayout,
  ContributorCollectionDetailLayout,
  ContributorItemDetailLayout,
} from "components/composed/contributor/ContributorDetailLayout";
import { query } from "components/composed/contributor/ContributorDetailLayout/ContributorDetailLayout";
import { query as itemQuery } from "components/composed/contributor/ContributorDetailLayout/ContributorItemDetailLayout";
import { query as collectionQuery } from "components/composed/contributor/ContributorDetailLayout/ContributorCollectionDetailLayout";
import { ContributorDetailLayoutQuery } from "@/relay/ContributorDetailLayoutQuery.graphql";
import { ContributorCollectionDetailLayoutQuery } from "@/relay/ContributorCollectionDetailLayoutQuery.graphql";
import { ContributorItemDetailLayoutQuery } from "@/relay/ContributorItemDetailLayoutQuery.graphql";
import {
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { LoadingBlock } from "components/atomic";

export async function getStaticProps() {
  const props = await getStaticGlobalContextData();

  return {
    props: { ...props },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function SlugContributorPage() {
  const slug = useRouteSlug();
  const router = useRouter();
  const itemSlug = routeQueryArrayToString(router.query.item);
  const collectionSlug = routeQueryArrayToString(router.query.collection);

  return slug && itemSlug ? (
    <QueryLoaderWrapper<ContributorItemDetailLayoutQuery>
      query={itemQuery}
      variables={{ slug, item: itemSlug }}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && <ContributorItemDetailLayout queryRef={queryRef} />
      }
    </QueryLoaderWrapper>
  ) : slug && collectionSlug ? (
    <QueryLoaderWrapper<ContributorCollectionDetailLayoutQuery>
      query={collectionQuery}
      variables={{ slug, collection: collectionSlug }}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && <ContributorCollectionDetailLayout queryRef={queryRef} />
      }
    </QueryLoaderWrapper>
  ) : (
    <QueryLoaderWrapper<ContributorDetailLayoutQuery>
      query={query}
      variables={{ slug: slug || "" }}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && <ContributorDetailLayout queryRef={queryRef} />
      }
    </QueryLoaderWrapper>
  );
}
