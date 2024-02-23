import React from "react";
import { graphql } from "relay-runtime";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { GetLayout } from "@wdp/lib/types/page";
import { GetStaticPropsContext } from "next";
import CommunityPageLayout from "components/composed/community/CommunityPageLayout";
import { PageCommunityQuery as Query } from "@/relay/PageCommunityQuery.graphql";
import CommunityLayoutQuery from "components/composed/community/CommunityLayoutQuery";
import {
  getStaticGlobalContextData,
  getStaticEntityData,
  STATIC_PROPS_REVALIDATE,
} from "contexts/GlobalStaticContext";
import { getStaticCommunityPagePaths } from "helpers";

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
    paths: await getStaticCommunityPagePaths(),
    fallback: "blocking",
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
