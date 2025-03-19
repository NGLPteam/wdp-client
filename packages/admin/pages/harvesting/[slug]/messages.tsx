import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
import type { messagesHarvestSourceQuery as Query } from "@/relay/messagesHarvestSourceQuery.graphql";
import Layout from "./layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceMessages({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <div>
      <pre>
        <code>{JSON.stringify(harvestSource.harvestMessages)}</code>
      </pre>
    </div>
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} {...props} />;
};

HarvestSourceMessages.getLayout = getLayout;

export default HarvestSourceMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestSourceQuery($slug: Slug!, $page: Int!) {
    harvestSource(slug: $slug) {
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
