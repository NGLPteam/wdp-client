import React from "react";
import { graphql } from "react-relay";
import { routeQueryArrayToString } from "@wdp/lib/routes";
import { useRouter } from "next/router";
import { GetLayout } from "@wdp/lib/types/page";
import AssetDetailBlock from "components/composed/asset/AssetDetailBlock";
import { FileSlugItemQuery as Query } from "@/relay/FileSlugItemQuery.graphql";
import ItemLayoutQuery from "components/composed/items/ItemLayoutQuery";

export default function ItemFile({ data }: Props) {
  return <AssetDetailBlock data={data?.asset} />;
}

const GetFileLayout: GetLayout<Props> = (props) => {
  const router = useRouter();
  const { file: fileQuery } = router.query;
  const file = routeQueryArrayToString(fileQuery);

  return (
    <ItemLayoutQuery<Query, Props>
      query={query}
      variables={{ file }}
      {...props}
    />
  );
};

type Props = {
  data: Query["response"];
};

ItemFile.getLayout = GetFileLayout;

const query = graphql`
  query FileSlugItemQuery($slug: Slug!, $file: Slug!) {
    asset(slug: $file) {
      ...AssetDetailBlockFragment
    }
    ...ItemLayoutQueryFragment @arguments(slug: $slug)
  }
`;
