import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { OrderingSlugCommunityQuery as Query } from "@/relay/OrderingSlugCommunityQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";

export default function OrderingSlugCommunity({ data }: Props) {
  return <EntityOrderingLayoutFactory data={data?.community} />;
}

const GetCollectionLayout: GetLayout<Props> = (props) => {
  return <CommunityLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

OrderingSlugCommunity.getLayout = GetCollectionLayout;

const query = graphql`
  query OrderingSlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;
