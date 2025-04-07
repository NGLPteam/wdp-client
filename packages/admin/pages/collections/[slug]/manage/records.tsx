import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityHarvestRecordsList from "components/composed/harvesting/EntityHarvestRecordsList";
import type { recordsCollectionQuery as Query } from "@/relay/recordsCollectionQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function CollectionRecords({ queryRef }: Props) {
  const { collection } = usePreloadedQuery<Query>(query, queryRef);

  return collection ? (
    <EntityHarvestRecordsList data={collection} headerStyle="secondary" />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => (
  <Layout
    query={query}
    refetchTags={["harvestRecords"]}
    modelName="harvest_record"
    {...props}
  />
);

CollectionRecords.getLayout = getLayout;

export default CollectionRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsCollectionQuery($slug: Slug!) {
    collection(slug: $slug) {
      ...EntityHarvestRecordsListFragment
    }
  }
`;
