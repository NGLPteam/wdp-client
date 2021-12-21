import React from "react";
import { graphql } from "react-relay";
import { QueryWrapper } from "@wdp/lib/api/components";
import { routeQueryArrayToString, useRouteSlug } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import ContributorDetailLayout from "components/composed/contributor/ContributorDetailLayout";
import { SlugContributorPageQuery as Query } from "@/relay/SlugContributorPageQuery.graphql";
import BaseLayout from "components/composed/base/BaseLayout";
import ContributorHTMLHead from "components/composed/contributor/ContributorHTMLHead";
import CommunityLayout from "components/composed/community/CommunityLayout";
import { SlugContributorCollectionPageQuery as CollectionQuery } from "@/relay/SlugContributorCollectionPageQuery.graphql";
import { SlugContributorItemPageQuery as ItemQuery } from "@/relay/SlugContributorItemPageQuery.graphql";
import ContributorDetailNav from "components/composed/contributor/ContributorDetailNav";

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
      {({ data }) => (
        <CommunityLayout data={data} communityData={data?.item?.community}>
          <>
            <ContributorHTMLHead data={data?.contributor} />
            <ContributorDetailNav data={data?.item} />
            <ContributorDetailLayout data={data?.contributor} />
          </>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : slug && collectionSlug ? (
    <QueryWrapper<CollectionQuery>
      query={collectionQuery}
      initialVariables={{ slug, collection: collectionSlug }}
    >
      {({ data }) => (
        <CommunityLayout
          data={data}
          communityData={data?.collection?.community}
        >
          <>
            <ContributorHTMLHead data={data?.contributor} />
            <ContributorDetailNav data={data?.collection} />
            <ContributorDetailLayout data={data?.contributor} />
          </>
        </CommunityLayout>
      )}
    </QueryWrapper>
  ) : (
    <QueryWrapper<Query> query={query} initialVariables={{ slug: slug || "" }}>
      {({ data }) => (
        <BaseLayout data={data}>
          <ContributorHTMLHead data={data?.contributor} />
          <ContributorDetailLayout data={data?.contributor} />
        </BaseLayout>
      )}
    </QueryWrapper>
  );
}

const query = graphql`
  query SlugContributorPageQuery($slug: Slug!) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailLayoutFragment
    }

    ...BaseLayoutFragment
  }
`;

const itemQuery = graphql`
  query SlugContributorItemPageQuery($slug: Slug!, $item: Slug!) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailLayoutFragment
    }

    item(slug: $item) {
      ...ContributorDetailNavFragment

      community {
        ...CommunityLayoutFragment
      }
    }

    ...CommunityLayoutAppFragment
  }
`;

const collectionQuery = graphql`
  query SlugContributorCollectionPageQuery($slug: Slug!, $collection: Slug!) {
    contributor(slug: $slug) {
      ...ContributorHTMLHeadFragment
      ...ContributorDetailLayoutFragment
    }

    collection(slug: $collection) {
      ...ContributorDetailNavFragment

      community {
        ...CommunityLayoutFragment
      }
    }

    ...CommunityLayoutAppFragment
  }
`;
