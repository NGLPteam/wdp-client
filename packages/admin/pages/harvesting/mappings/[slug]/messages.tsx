import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { messagesHarvestMappingQuery as Query } from "@/relay/messagesHarvestMappingQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestMappingMessages({ queryRef }: Props) {
  const { harvestMapping } = usePreloadedQuery<Query>(query, queryRef);

  return harvestMapping ? (
    <div>
      <pre>
        <code>{JSON.stringify(harvestMapping.harvestMessages)}</code>
      </pre>
    </div>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
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
        nodes {
          id
          level
          message
        }
      }
    }
  }
`;
