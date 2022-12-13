import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { SlugContributorPageQuery as Query } from "@/relay/SlugContributorPageQuery.graphql";
import { SlugContributorCollectionPageQuery as CollectionQuery } from "@/relay/SlugContributorCollectionPageQuery.graphql";
import { SlugContributorItemPageQuery as ItemQuery } from "@/relay/SlugContributorItemPageQuery.graphql";
import {
  ContributorDetailLayout,
  ContributorCollectionDetailLayout,
  ContributorItemDetailLayout,
} from "components/composed/contributor/ContributorDetailLayout";
import {
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";

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
    <QueryWrapper<ItemQuery>
      query={itemQuery}
      initialVariables={{ slug, item: itemSlug }}
    >
      {({ data }) => <ContributorItemDetailLayout data={data} />}
    </QueryWrapper>
  ) : slug && collectionSlug ? (
    <QueryWrapper<CollectionQuery>
      query={collectionQuery}
      initialVariables={{ slug, collection: collectionSlug }}
    >
      {({ data }) => <ContributorCollectionDetailLayout data={data} />}
    </QueryWrapper>
  ) : (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: slug || "" }}>
      {({ data }) => <ContributorDetailLayout data={data} />}
    </QueryWrapper>
  );
}

const query = graphql`
  query SlugContributorPageQuery($slug: Slug!) {
    ...ContributorDetailLayoutFragment
  }
`;

const itemQuery = graphql`
  query SlugContributorItemPageQuery($slug: Slug!, $item: Slug!) {
    ...ContributorItemDetailLayoutFragment
  }
`;

const collectionQuery = graphql`
  query SlugContributorCollectionPageQuery($slug: Slug!, $collection: Slug!) {
    ...ContributorCollectionDetailLayoutFragment
  }
`;
