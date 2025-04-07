import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
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
  useBaseListQueryVars();
  useSearchQueryVars();

  return (
    <Layout
      query={query}
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
  query messagesHarvestAttemptQuery($slug: Slug!, $page: Int!) {
    harvestAttempt(slug: $slug) {
      harvestMessages(page: $page, perPage: 20, filters: { severity: INFO }) {
        ...HarvestMessagesListFragment
      }
    }
  }
`;
