import { graphql } from "react-relay";
import { useRefetchable } from "relay-hooks/lib/useRefetchable";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { searchCommunityQuery as Query } from "@/relay/searchCommunityQuery.graphql";
import SearchLayout from "components/composed/search/SearchLayout";
import { SearchLayoutEntityQuery } from "@/relay/SearchLayoutEntityQuery.graphql";
import { searchCommunityQueryFragment$key } from "@/relay/searchCommunityQueryFragment.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import { LoadingBlock } from "components/atomic";
import { getStaticEntityData } from "contexts/GlobalStaticContext";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);

  return {
    props: { entityData },
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
    fragment,
    data
  );

  return (
    <SearchLayout refetch={refetch} data={searchData} isLoading={isLoading} />
  );
}

export default function SearchPage({ data }: Props) {
  return data?.community ? (
    <SearchLayoutQuery data={data.community} />
  ) : (
    <LoadingBlock />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <CommunityLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

SearchPage.getLayout = getLayout;

const query = graphql`
  query searchCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...searchCommunityQueryFragment
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
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
