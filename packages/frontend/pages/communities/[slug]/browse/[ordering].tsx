import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { OrderingSlugCommunityQuery as Query } from "@/relay/OrderingSlugCommunityQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";
import { setCacheDefaults } from "helpers";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);
  setCacheDefaults(context.res);

  return {
    props: { entityData },
  };
}

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
