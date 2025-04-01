import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSourceUpdateForm from "components/composed/harvesting/HarvestSourceUpdateForm";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { detailsHarvestSourceQuery as Query } from "@/relay/detailsHarvestSourceQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceDetails({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceUpdateForm data={harvestSource} />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} showLoadingCircle {...props} />;
};

HarvestSourceDetails.getLayout = getLayout;

export default HarvestSourceDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsHarvestSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      ...HarvestSourceUpdateFormFragment
    }
  }
`;
