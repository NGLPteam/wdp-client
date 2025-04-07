import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import DetailsContent from "components/composed/harvesting/HarvestRecordDetails";
import type { detailsHarvestRecordQuery as Query } from "@/relay/detailsHarvestRecordQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestRecordDetails({ queryRef }: Props) {
  const { harvestRecord } = usePreloadedQuery<Query>(query, queryRef);

  return harvestRecord ? <DetailsContent data={harvestRecord} /> : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <Layout query={query} showLoadingCircle {...props} />;
};

HarvestRecordDetails.getLayout = getLayout;

export default HarvestRecordDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsHarvestRecordQuery($slug: Slug!) {
    harvestRecord(slug: $slug) {
      ...HarvestRecordDetailsFragment
    }
  }
`;
