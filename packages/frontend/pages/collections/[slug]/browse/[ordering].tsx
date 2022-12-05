import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { OrderingSlugCollectionQuery as Query } from "@/relay/OrderingSlugCollectionQuery.graphql";
import EntityOrderingLayoutFactory from "components/factories/EntityOrderingLayoutFactory";
import CollectionLayoutQuery from "components/composed/collections/CollectionLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";
import { setCacheDefaults } from "helpers";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);
  setCacheDefaults(context.res);

  return {
    props: { entityData },
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
