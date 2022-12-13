import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { SlugItemQuery as Query } from "@/relay/SlugItemQuery.graphql";
import EntityContentLayoutFactory from "components/factories/EntityContentLayoutFactory";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import {
  getStaticEntityData,
  getStaticGlobalContextData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import getStaticGoogleScholarData from "contexts/GlobalStaticContext/getStaticGoogleScholarData";

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getStaticGlobalContextData();
  const entityData = await getStaticEntityData(context);
  const googleScholarData = await getStaticGoogleScholarData(context);

  return {
    props: { ...props, entityData, googleScholarData },
    revalidate: STATIC_PROPS_REVALIDATE,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
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
