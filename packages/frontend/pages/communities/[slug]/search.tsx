import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { GraphQLTaggedNode } from "relay-runtime";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { searchCommunityQuery as Query } from "@/relay/searchCommunityQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchCommunityQueryFragment$key } from "@/relay/searchCommunityQueryFragment.graphql";
import { LoadingBlock } from "components/atomic";
import {
  getStaticEntityData,
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { QueryLoaderWrapper } from "@wdp/lib/api/components";
import { useRouteSlug } from "@wdp/lib/routes";
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
  data: searchCommunityQueryFragment$key;
}) {
  const {
    data: searchData,
    refetch,
    isLoading,
  } = useRefetchable<SearchLayoutEntityQuery, searchCommunityQueryFragment$key>(
    fragment as GraphQLTaggedNode,
    data
  );

  return (
    <SearchLayout refetch={refetch} data={searchData} isLoading={isLoading} />
  );
}

export default function SearchPage({ queryRef }: Props) {
  const { community } = usePreloadedQuery<Query>(query, queryRef);

  return community ? (
    <AppLayout communityData={community} entityData={community}>
      <SearchLayoutQuery data={community} />
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
  query searchCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...searchCommunityQueryFragment
      ...AppLayoutCommunityFragment
      ...AppLayoutEntityFragment
      ...CommunityLandingLayoutFragment
    }
  }
`;

const fragment = graphql`
  fragment searchCommunityQueryFragment on Entity
  @refetchable(queryName: "SearchLayoutEntityQuery")
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
