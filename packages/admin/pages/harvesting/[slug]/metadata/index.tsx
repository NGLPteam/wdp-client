import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import MetadataMappingsList from "components/composed/harvesting/HarvestMetadataMappingsList";
import type { metadataHarvestSourceQuery as Query } from "@/relay/metadataHarvestSourceQuery.graphql";
import Layout from "../_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceMappings({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <MetadataMappingsList
      data={harvestSource?.harvestMetadataMappings}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <Layout
      query={query}
      modelName="harvest_mapping"
      refetchTags={["metadataMappings"]}
      {...props}
    />
  );
};

HarvestSourceMappings.getLayout = getLayout;

export default HarvestSourceMappings;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query metadataHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestMetadataMappingOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      id
      harvestMetadataMappings(order: $order, page: $page, perPage: 20) {
        ...HarvestMetadataMappingsListFragment
      }
    }
  }
`;
