import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import HarvestMappingsList from "components/composed/harvesting/HarvestMappingsList";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { mappingsHarvestSourceQuery as Query } from "@/relay/mappingsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceMappings({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestMappingsList data={harvestSource} />
    </HarvestSourceLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
};

HarvestSourceMappings.getLayout = getLayout;

export default HarvestSourceMappings;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query mappingsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestSetOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
      ...HarvestMappingsListFragment
    }
  }
`;
