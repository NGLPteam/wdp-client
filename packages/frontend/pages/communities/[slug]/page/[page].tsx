import React from "react";
import { graphql } from "react-relay";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import { PageCommunityQuery as Query } from "@/relay/PageCommunityQuery.graphql";
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

export default function CommunityPage({ data }: Props) {
  return <CommunityPageLayout data={data?.community?.page} />;
}

const GetCommunityLayout: GetLayout<Props> = (props) => {
  const pageSlug = useRoutePageSlug();

  return (
    <CommunityLayoutQuery<Query, Props>
      query={query}
      variables={{ pageSlug }}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

CommunityPage.getLayout = GetCommunityLayout;

const query = graphql`
  query PageCommunityQuery($slug: Slug!, $pageSlug: String!) {
    community(slug: $slug) {
      page(slug: $pageSlug) {
        ...CommunityPageLayoutFragment
      }
    }
    ...CommunityLayoutQueryFragment @arguments(slug: $slug)
  }
`;
