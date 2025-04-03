import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars, useRouteSlug } from "hooks";
import HarvestRecordsList from "components/composed/harvesting/HarvestRecordsList";
import type { recordsHarvestAttemptQuery as Query } from "@/relay/recordsHarvestAttemptQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestAttemptRecords({ queryRef }: Props) {
  const { harvestAttempt } = usePreloadedQuery<Query>(query, queryRef);

  const slug = useRouteSlug() || undefined;

  return (
    <HarvestRecordsList
      data={harvestAttempt?.harvestRecords}
      headerStyle="secondary"
      hideHeader
      backTo="harvestAttempt"
      backToSlug={slug}
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} modelName="harvest_record" {...props} />;
};

HarvestAttemptRecords.getLayout = getLayout;

export default HarvestAttemptRecords;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query recordsHarvestAttemptQuery(
    $slug: Slug!
    $order: HarvestRecordOrder
    $page: Int!
  ) {
    harvestAttempt(slug: $slug) {
      harvestRecords(order: $order, page: $page, perPage: 20) {
        ...HarvestRecordsListFragment
      }
    }
  }
`;
