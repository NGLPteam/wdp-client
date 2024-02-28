import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { AnnouncementSlugCollectionQuery as Query } from "@/relay/AnnouncementSlugCollectionQuery.graphql";
import EntityAnnouncementLayoutFactory from "components/factories/EntityAnnouncementLayoutFactory";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);

  return {
    props: { ...props, entityData },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default function AnnouncementPage({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AppLayout communityData={collection.community} entityData={collection}>
      <EntityLayoutFactory data={collection}>
        <EntityAnnouncementLayoutFactory data={collection} />
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

const GetCollectionLayout: GetLayout<Props> = (props) => {
  const router = useRouter();
  const announcementSlug = routeQueryArrayToString(router.query.announcement);

  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ slug, announcementSlug }}
      loadingFallback={<LoadingBlock />}
    >
      {({ queryRef }) =>
        queryRef && (
          <PageComponent {...pageComponentProps} queryRef={queryRef} />
        )
      }
    </QueryLoaderWrapper>
  );
};

type Props = {
  queryRef: PreloadedQuery<Query>;
};

AnnouncementPage.getLayout = GetCollectionLayout;

const query = graphql`
  query AnnouncementSlugCollectionQuery(
    $slug: Slug!
    $announcementSlug: Slug!
  ) {
    collection(slug: $slug) {
      ...EntityAnnouncementLayoutFactoryFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
