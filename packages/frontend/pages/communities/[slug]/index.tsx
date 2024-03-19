import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";
import {
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
  getStaticGlobalContextData,
} from "contexts/GlobalStaticContext";
import { getStaticCommunityPaths } from "helpers";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";

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
    paths: await getStaticCommunityPaths(),
    fallback: "blocking",
  };
}

export default function CommunityPage({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AppLayout communityData={community} entityData={community}>
      <CommunityLandingLayout data={community} />
    </AppLayout>
  ) : null;
}

/* eslint-disable react-hooks/rules-of-hooks */
const getLayout: GetLayout<Props> = (props) => {
  const slug = useRouteSlug();

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ slug }}
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

CommunityPage.getLayout = getLayout;

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
      ...CommunityLandingLayoutFragment
    }
  }
`;
