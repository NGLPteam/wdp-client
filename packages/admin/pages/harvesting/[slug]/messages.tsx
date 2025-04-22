import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestMessagesList from "components/composed/harvesting/HarvestMessagesList";
import type { messagesHarvestSourceQuery as Query } from "@/relay/messagesHarvestSourceQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestSourceMessages({ queryRef }: Props) {
  const { harvestSource } = usePreloadedQuery<Query>(query, queryRef);

  return harvestSource ? (
    <HarvestMessagesList data={harvestSource.harvestMessages} />
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

HarvestSourceMessages.getLayout = getLayout;

export default HarvestSourceMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestSourceQuery(
    $slug: Slug!
    $page: Int!
    $severity: HarvestMessageLevel!
  ) {
    harvestSource(slug: $slug) {
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
