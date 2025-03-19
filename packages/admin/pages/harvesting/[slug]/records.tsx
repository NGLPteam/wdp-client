import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import HarvestRecordsList from "components/composed/harvesting/HarvestRecordsList";
import type { recordsHarvestSourceQuery as Query } from "@/relay/recordsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceRecords({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestRecordsList data={harvestSource.harvestRecords} />
    </HarvestSourceLayout>
  ) : null;
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
      ...HarvestSourceLayoutFragment
      harvestRecords(order: $order, page: $page, perPage: 20) {
        ...HarvestRecordsListFragment
      }
    }
  }
`;
