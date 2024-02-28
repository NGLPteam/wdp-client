import { Suspense } from "react";
import {
  graphql,
  usePreloadedQuery,
  PreloadedQuery,
  useRefetchableFragment,
} from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { searchCollectionQuery as Query } from "@/relay/searchCollectionQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutCollectionQuery } from "@/relay/SearchLayoutCollectionQuery.graphql";
import { searchCollectionQueryFragment$key } from "@/relay/searchCollectionQueryFragment.graphql";
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

function SearchLayoutQuery({
  data,
}: {
  data: searchCollectionQueryFragment$key;
}) {
  const [searchData, refetch] = useRefetchableFragment<
    SearchLayoutCollectionQuery,
    searchCollectionQueryFragment$key
  >(fragment, data);

  return <SearchLayout refetch={refetch} data={searchData} />;
}

export default function SearchPage({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <AppLayout communityData={collection.community} entityData={collection}>
      <EntityLayoutFactory data={collection}>
        <Suspense fallback={<LoadingBlock />}>
          <SearchLayoutQuery data={collection} />
        </Suspense>
      </EntityLayoutFactory>
    </AppLayout>
  ) : null;
}

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

SearchPage.getLayout = getLayout;

const query = graphql`
  query searchCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...searchCollectionQueryFragment
      ...AppLayoutEntityFragment
      ...EntityLayoutFactoryFragment
      community {
        ...AppLayoutCommunityFragment
      }
    }
  }
`;

const fragment = graphql`
  fragment searchCollectionQueryFragment on Collection
  @refetchable(queryName: "SearchLayoutCollectionQuery")
  @argumentDefinitions(
    query: { type: "String", defaultValue: "" }
    predicates: { type: "[SearchPredicateInput!]", defaultValue: [] }
    page: { type: "Int", defaultValue: 1 }
    order: { type: "EntityOrder", defaultValue: PUBLISHED_ASCENDING }
    schema: { type: "[String!]", defaultValue: [] }
  ) {
    ...SearchLayoutFragment
      @arguments(
        query: $query
        predicates: $predicates
        page: $page
        order: $order
        schema: $schema
      )
  }
`;
