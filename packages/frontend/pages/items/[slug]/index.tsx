import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { SlugItemQuery as Query } from "@/relay/SlugItemQuery.graphql";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);

  return {
    props: { entityData },
  };
}

export default function ItemPage({ data }: Props) {
  return <EntityContentLayoutFactory data={data?.item} />;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

ItemPage.getLayout = getLayout;

const query = graphql`
  query SlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityContentLayoutFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
