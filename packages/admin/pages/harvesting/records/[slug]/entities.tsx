import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
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
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} showLoadingCircle {...props} />;
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
