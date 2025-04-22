import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestMessagesList from "components/composed/harvesting/HarvestMessagesList";
import type { messagesHarvestAttemptQuery as Query } from "@/relay/messagesHarvestAttemptQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestAttemptMessages({ queryRef }: Props) {
  const { harvestAttempt } = usePreloadedQuery<Query>(query, queryRef);

  return harvestAttempt ? (
    <HarvestMessagesList data={harvestAttempt.harvestMessages} isAttempt />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <Layout
      query={query}
      defaultQueryVars={{ severity: "INFO" }}
      modelName="harvest_message"
      showLoadingCircle
      {...props}
    />
  );
};

HarvestAttemptMessages.getLayout = getLayout;

export default HarvestAttemptMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestAttemptQuery(
    $slug: Slug!
    $page: Int!
    $severity: HarvestMessageLevel!
  ) {
    harvestAttempt(slug: $slug) {
      harvestMessages(
        page: $page
        perPage: 20
        filters: { severity: $severity }
      ) {
        ...HarvestMessagesListFragment
      }
    }
  }
`;
