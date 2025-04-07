import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestMappingsList from "components/composed/harvesting/HarvestMappingsList";
import type { mappingsHarvestSourceQuery as Query } from "@/relay/mappingsHarvestSourceQuery.graphql";
import Layout from "../_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceMappings({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <HarvestMappingsList
      data={harvestSource?.harvestMappings}
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
      refetchTags={["harvestMappings"]}
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
  query mappingsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestMappingOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      id
      harvestMappings(order: $order, page: $page, perPage: 20) {
        ...HarvestMappingsListFragment
      }
    }
  }
`;
