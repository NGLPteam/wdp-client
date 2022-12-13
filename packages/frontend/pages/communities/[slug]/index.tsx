import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import {
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
  getStaticGlobalContextData,
} from "contexts/GlobalStaticContext";
import { getStaticCommunityPaths } from "helpers";

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
    paths: await getStaticCommunityPaths(),
    fallback: "blocking",
  };
}

export default function CommunityPage({ data }: Props) {
  return data?.community ? (
    <CommunityLandingLayout data={data.community} />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <CommunityLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

CommunityPage.getLayout = getLayout;

const query = graphql`
  query SlugCommunityQuery($slug: Slug!) {
    community(slug: $slug) {
      ...CommunityLandingLayoutFragment
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;
