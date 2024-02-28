import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";
import { OrderingSlugCommunityQuery as Query } from "@/relay/OrderingSlugCommunityQuery.graphql";

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

export default function OrderingSlugCommunity({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AppLayout communityData={community} entityData={community}>
      <EntityOrderingLayoutFactory data={community} />
    </AppLayout>
  ) : null;
}

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
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

OrderingSlugCommunity.getLayout = getLayout;

const query = graphql`
  query OrderingSlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
    }
  }
`;
