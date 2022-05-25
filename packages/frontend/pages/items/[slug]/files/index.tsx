import React from "react";
import { graphql } from "react-relay";
import { GetLayout } from "@wdp/lib/types/page";
import { filesSlugItemQuery as Query } from "@/relay/filesSlugItemQuery.graphql";
import AssetsBlock from "components/composed/asset/AssetsBlock";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemFiles({ data }: Props) {
  return <AssetsBlock data={data?.item?.assets} paddingBottom="xxl" />;
}

const getLayout: GetLayout<Props> = (props) => {
  return <ItemLayoutQuery<Query, Props> query={query} {...props} />;
};

type Props = {
  data: Query["response"];
};

ItemFiles.getLayout = getLayout;

const query = graphql`
  query filesSlugItemQuery($slug: Slug!) {
    item(slug: $slug) {
      assets {
        ...AssetsBlockFragment
      }
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
