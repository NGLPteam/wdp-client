import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { getStaticCommunityPagePaths } from "helpers";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";
import { PageCommunityQuery as Query } from "@/relay/PageCommunityOldQuery.graphql";

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
    paths: await getStaticCommunityPagePaths(),
    fallback: "blocking",
  };
}

export default function CommunityPage({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AppLayout communityData={community} entityData={community}>
      <CommunityPageLayout data={community?.page} />
    </AppLayout>
  ) : null;
}

/* eslint-disable react/prop-types */
const GetCommunityLayout: GetLayout<Props> = (props) => {
  const pageSlug = useRoutePageSlug();
  const slug = useRouteSlug();

  if (!slug || !pageSlug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ slug, pageSlug }}
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

CommunityPage.getLayout = GetCommunityLayout;

const query = graphql`
  query PageCommunityOldQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      page(slug: $pageSlug) {
        ...CommunityPageLayoutFragment
      }
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
    }
  }
`;
