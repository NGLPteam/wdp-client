import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import HarvestMessagesList from "components/composed/harvesting/HarvestMessagesList";
import type { messagesHarvestRecordQuery as Query } from "@/relay/messagesHarvestRecordQuery.graphql";
import Layout from "./_layout";
import type { GetLayout } from "@wdp/lib/types/page";

function HarvestRecordMessages({ queryRef }: Props) {
  const { harvestRecord } = usePreloadedQuery<Query>(query, queryRef);

  return harvestRecord ? (
    <HarvestMessagesList data={harvestRecord.harvestMessages} isRecord />
  ) : null;
}

const getLayout: GetLayout<Props> = (props) => {
  return (
    <Layout
      query={query}
      defaultQueryVars={{ severity: "INFO" }}
      modelName="harvest_record"
      showLoadingCircle
      {...props}
    />
  );
};

HarvestRecordMessages.getLayout = getLayout;

export default HarvestRecordMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestRecordQuery(
    $slug: Slug!
    $page: Int!
    $severity: HarvestMessageLevel!
  ) {
    harvestRecord(slug: $slug) {
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
