import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { GetServerSidePropsContext } from "next";
import ContributionsBlock from "components/composed/contribution/ContributionsBlock";
import { contributorsSlugItemQuery as Query } from "@/relay/contributorsSlugItemQuery.graphql";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";
import { getStaticEntityData } from "contexts/GlobalStaticContext";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const entityData = await getStaticEntityData(context);

  return {
    props: { entityData },
  };
}

export default function ContributorsSlugItemPage({ data }: Props) {
  return (
    <ContributionsBlock
      data={data?.item?.contributions}
      background="neutral00"
      paddingBottom="xxl"
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

ContributorsSlugItemPage.getLayout = getLayout;

const query = graphql`
  query contributorsSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      contributions {
        ...ContributionsBlockFragment
      }
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
