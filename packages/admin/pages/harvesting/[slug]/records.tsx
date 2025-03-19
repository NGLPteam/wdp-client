import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import HarvestRecordsList from "components/composed/harvesting/HarvestRecordsList";
import type { recordsHarvestSourceQuery as Query } from "@/relay/recordsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceRecords({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef || null);

  return (
    <HarvestRecordsList
      data={harvestSource?.harvestRecords}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
};

HarvestSourceRecords.getLayout = getLayout;

export default HarvestSourceRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestRecordOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      harvestRecords(order: $order, page: $page, perPage: 20) {
        ...HarvestRecordsListFragment
      }
    }
  }
`;
