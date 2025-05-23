import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestMappingEditForm from "components/composed/harvesting/HarvestMappingEditForm";
import type { detailsHarvestMappingQuery as Query } from "@/relay/detailsHarvestMappingQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestMappingDetails({ queryRef }: Props) {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  return harvestMapping ? (
    <HarvestMappingEditForm data={harvestMapping} />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return <Layout query={query} showLoadingCircle {...props} />;
};

HarvestMappingDetails.getLayout = getLayout;

export default HarvestMappingDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsHarvestMappingQuery($slug: Slug!) {
    harvestMapping(slug: $slug) {
      ...HarvestMappingEditFormFragment
    }
  }
`;
