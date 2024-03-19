import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
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
import { OrderingSlugCollectionQuery as Query } from "@/relay/OrderingSlugCollectionQuery.graphql";

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

export default function OrderingSlugCollection({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AppLayout communityData={collection.community} entityData={collection}>
      <EntityLayoutFactory data={collection}>
        <EntityOrderingLayoutFactory data={collection} />
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

/* eslint-disable react/prop-types */
const GetCollectionLayout: GetLayout<Props> = (props) => {
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

OrderingSlugCollection.getLayout = GetCollectionLayout;

const query = graphql`
  query OrderingSlugCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;
