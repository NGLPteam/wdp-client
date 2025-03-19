import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestAttemptsList from "components/composed/harvesting/HarvestAttemptsList";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { attemptsHarvestSourceQuery as Query } from "@/relay/attemptsHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceAttempts({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return (
    <HarvestAttemptsList
      data={harvestSource?.harvestAttempts}
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

HarvestSourceAttempts.getLayout = getLayout;

export default HarvestSourceAttempts;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query attemptsHarvestSourceQuery(
    $slug: Slug!
    $order: HarvestAttemptOrder
    $page: Int!
  ) {
    harvestSource(slug: $slug) {
      harvestAttempts(order: $order, page: $page, perPage: 20) {
        ...HarvestAttemptsListFragment
      }
    }
  }
`;
