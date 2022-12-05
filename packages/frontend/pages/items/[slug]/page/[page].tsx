import React from "react";
import { graphql } from "react-relay";
import { useRoutePageSlug } from "@wdp/lib/routes";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import EntityPageLayoutFactory from "components/factories/EntityPageLayoutFactory";
import { PageSlugItemQuery as Query } from "@/relay/PageSlugItemQuery.graphql";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";
import { setCacheDefaults } from "helpers";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);
  setCacheDefaults(context.res);

  return {
    props: { entityData },
  };
}

export default function ItemPage({ data }: Props) {
  return <EntityPageLayoutFactory data={data?.item} />;
}

const GetPageLayout: GetLayout<Props> = (props) => {
  const pageSlug = useRoutePageSlug();

  return (
    <ItemLayoutQuery<Query, Props>
      query={query}
      variables={{ pageSlug }}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

ItemPage.getLayout = GetPageLayout;

const query = graphql`
  query PageSlugItemQuery($slug: Slug!, $pageSlug: String!) {
    item(slug: $slug) {
      ...EntityPageLayoutFactoryFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
