import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import { SlugCommunityQuery as Query } from "@/relay/SlugCommunityQuery.graphql";
import CommunityLandingLayout from "components/composed/community/CommunityLandingLayout";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);

  return {
    props: { entityData },
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
