import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { detailsHarvestRecordQuery as Query } from "@/relay/detailsHarvestRecordQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestRecordDetails({ queryRef }: Props) {
  const { harvestRecord } = usePreloadedQuery<Query>(query, queryRef);

  return harvestRecord ? <div>details here</div> : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

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
      id
    }
  }
`;
