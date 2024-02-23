import React from "react";
import { graphql } from "relay-runtime";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { OrderingSlugCollectionQuery as Query } from "@/relay/OrderingSlugCollectionQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";
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

export default function OrderingSlugCollection({ data }: Props) {
  return <EntityOrderingLayoutFactory data={data?.collection} />;
}

const GetCollectionLayout: GetLayout<Props> = (props) => {
  return <CollectionLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

OrderingSlugCollection.getLayout = GetCollectionLayout;

const query = graphql`
  query OrderingSlugCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityOrderingLayoutFactoryFragment
    }
    ...CollectionLayoutQueryFragment @arguments(slug: $slug)
  }
`;
