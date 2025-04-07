import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import DetailsContent from "components/composed/harvesting/HarvestAttemptDetails";
import type { detailsHarvestAttemptQuery as Query } from "@/relay/detailsHarvestAttemptQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestAttemptDetails({ queryRef }: Props) {
  const { harvestAttempt } = usePreloadedQuery<Query>(query, queryRef);

  return harvestAttempt ? <DetailsContent data={harvestAttempt} /> : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <Layout query={query} showLoadingCircle {...props} />;
};

HarvestAttemptDetails.getLayout = getLayout;

export default HarvestAttemptDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsHarvestAttemptQuery($slug: Slug!) {
    harvestAttempt(slug: $slug) {
      ...HarvestAttemptDetailsFragment
    }
  }
`;
