import React from "react";
import { graphql } from "relay-runtime";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { OrderingSlugCommunityQuery as Query } from "@/relay/OrderingSlugCommunityQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";

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
