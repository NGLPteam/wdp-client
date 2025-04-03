import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import HarvestMessagesList from "components/composed/harvesting/HarvestMessagesList";
import type { messagesHarvestMappingQuery as Query } from "@/relay/messagesHarvestMappingQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestMappingMessages({ queryRef }: Props) {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  return harvestMapping ? (
    <HarvestMessagesList data={harvestMapping.harvestMessages} isMapping />
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

HarvestMappingMessages.getLayout = getLayout;

export default HarvestMappingMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestMappingQuery($slug: Slug!, $page: Int!) {
    harvestMapping(slug: $slug) {
      harvestMessages(page: $page, perPage: 20) {
        ...HarvestMessagesListFragment
      }
    }
  }
`;
