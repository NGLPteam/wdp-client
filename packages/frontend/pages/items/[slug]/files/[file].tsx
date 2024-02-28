import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import AssetDetailBlock from "components/composed/asset/AssetDetailBlock";
import { FileSlugItemQuery as Query } from "@/relay/FileSlugItemQuery.graphql";
import {
  getStaticEntityData,
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
import { LoadingBlock } from "components/atomic";
import ErrorPage from "next/error";
import AppLayout from "components/global/AppLayout";
import EntityLayoutFactory from "components/factories/EntityLayoutFactory";

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

export default function ItemFile({ queryRef }: Props) {
  const { item, asset } = usePreloadedQuery<Query>(query, queryRef);

  return item && asset ? (
    <AppLayout communityData={item.community} entityData={item}>
      <EntityLayoutFactory data={item}>
        <AssetDetailBlock data={asset} />
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

const GetFileLayout: GetLayout<Props> = (props) => {
  const slug = useRouteSlug();
  const router = useRouter();
  const { file: fileQuery } = router.query;
  const file = routeQueryArrayToString(fileQuery);

  if (!slug) return <ErrorPage statusCode={404} />;

  const { PageComponent, pageComponentProps } = props;

  return (
    <QueryLoaderWrapper<Query>
      query={query}
      variables={{ slug, file }}
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

ItemFile.getLayout = GetFileLayout;

const query = graphql`
  query FileSlugItemQuery($slug: Slug!, $file: Slug!) {
    asset(slug: $file) {
      ...AssetDetailBlockFragment
    }
    item(slug: $slug) {
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment

      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
