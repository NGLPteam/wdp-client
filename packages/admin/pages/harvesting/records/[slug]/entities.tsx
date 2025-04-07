import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestEntitiesList from "components/composed/harvesting/HarvestEntitiesList";
import type { entitiesHarvestRecordQuery as Query } from "@/relay/entitiesHarvestRecordQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestRecordEntities({ queryRef }: Props) {
  const { harvestRecord } = usePreloadedQuery<Query>(query, queryRef);

  return harvestRecord ? (
    <HarvestEntitiesList
      data={harvestRecord}
      headerStyle="secondary"
      hideHeader
    />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <Layout query={query} modelName="harvest_entity" {...props} />;
};

HarvestRecordEntities.getLayout = getLayout;

export default HarvestRecordEntities;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query entitiesHarvestRecordQuery($slug: Slug!) {
    harvestRecord(slug: $slug) {
      ...HarvestEntitiesListFragment
    }
  }
`;
