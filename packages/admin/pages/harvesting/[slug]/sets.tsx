import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import HarvestSetsList from "components/composed/harvesting/HarvestSetsList";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { setsHarvestSourceQuery as Query } from "@/relay/setsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceSets({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestSetsList data={harvestSource.harvestSets} />
    </HarvestSourceLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
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
      ...HarvestSourceLayoutFragment
      harvestSets(order: $order, page: $page, perPage: 20) {
        ...HarvestSetsListFragment
      }
    }
  }
`;
