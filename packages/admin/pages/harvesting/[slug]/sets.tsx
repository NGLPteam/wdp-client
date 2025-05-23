import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSetsList from "components/composed/harvesting/HarvestSetsList";
import type { setsHarvestSourceQuery as Query } from "@/relay/setsHarvestSourceQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceSets({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <HarvestSetsList
      data={harvestSource?.harvestSets}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  return <Layout query={query} modelName="harvest_set" {...props} />;
};

HarvestSourceSets.getLayout = getLayout;

export default HarvestSourceSets;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query setsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestSetOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      harvestSets(order: $order, page: $page, perPage: 20) {
        ...HarvestSetsListFragment
      }
    }
  }
`;
