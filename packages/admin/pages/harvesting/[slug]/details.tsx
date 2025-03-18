import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestSourceUpdateForm from "components/composed/harvesting/HarvestSourceUpdateForm";
import HarvestSourceLayout from "components/composed/harvesting/HarvestSourceLayout";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { detailsHarvestSourceQuery as Query } from "@/relay/detailsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceDetails({ queryRef, ...layoutProps }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestSourceLayout {...layoutProps} data={harvestSource}>
      <HarvestSourceUpdateForm data={harvestSource} />
    </HarvestSourceLayout>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
};

HarvestSourceDetails.getLayout = getLayout;

export default HarvestSourceDetails;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query detailsHarvestSourceQuery($slug: Slug!) {
    harvestSource(slug: $slug) {
      ...HarvestSourceLayoutFragment
      ...HarvestSourceUpdateFormFragment
    }
  }
`;
