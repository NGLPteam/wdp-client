import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestAttemptsList from "components/composed/harvesting/HarvestAttemptsList";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { attemptsHarvestMappingQuery as Query } from "@/relay/attemptsHarvestMappingQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestMappingAttempts({ queryRef }: Props) {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <HarvestAttemptsList
      data={harvestMapping?.harvestAttempts}
      headerStyle="secondary"
      hideHeader
    />
  );
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
};

HarvestMappingAttempts.getLayout = getLayout;

export default HarvestMappingAttempts;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query attemptsHarvestMappingQuery(
    $slug: Slug!
    $order: HarvestAttemptOrder
    $page: Int!
  ) {
    harvestMapping(slug: $slug) {
      harvestAttempts(order: $order, page: $page, perPage: 20) {
        ...HarvestAttemptsListFragment
      }
    }
  }
`;
