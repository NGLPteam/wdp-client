import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars, useRouteSlug } from "hooks";
import HarvestRecordsList from "components/composed/harvesting/HarvestRecordsList";
import type { recordsHarvestMappingQuery as Query } from "@/relay/recordsHarvestMappingQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestMappingRecords({ queryRef }: Props) {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  const slug = useRouteSlug() || undefined;

  return (
    <HarvestRecordsList
      data={harvestMapping?.harvestRecords}
      headerStyle="secondary"
      hideHeader
      backTo="harvestMapping"
      backToSlug={slug}
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} modelName="harvest_record" {...props} />;
};

HarvestMappingRecords.getLayout = getLayout;

export default HarvestMappingRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsHarvestMappingQuery(
    $slug: Slug!
    $order: HarvestRecordOrder
    $page: Int!
  ) {
    harvestMapping(slug: $slug) {
      harvestRecords(order: $order, page: $page, perPage: 20) {
        ...HarvestRecordsListFragment
      }
    }
  }
`;
