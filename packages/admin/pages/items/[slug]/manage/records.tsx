import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import EntityHarvestRecordsList from "components/composed/harvesting/EntityHarvestRecordsList";
import type { recordsItemQuery as Query } from "@/relay/recordsItemQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function ItemRecords({ queryRef }: Props) {
  const { item } = usePreloadedQuery<Query>(query, queryRef);

  return item ? (
    <EntityHarvestRecordsList data={item} headerStyle="secondary" />
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

ItemRecords.getLayout = getLayout;

export default ItemRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsItemQuery($slug: Slug!) {
    item(slug: $slug) {
      ...EntityHarvestRecordsListFragment
    }
  }
`;
