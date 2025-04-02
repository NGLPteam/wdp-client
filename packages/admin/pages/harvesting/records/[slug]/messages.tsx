import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import { useSearchQueryVars, useBaseListQueryVars } from "hooks";
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
  useBaseListQueryVars();
  useSearchQueryVars();

  return <Layout query={query} showLoadingCircle {...props} />;
};

HarvestRecordMessages.getLayout = getLayout;

export default HarvestRecordMessages;

type Props = {
  queryRef: PreloadedQuery<Query>;
};

const query = graphql`
  query messagesHarvestRecordQuery($slug: Slug!, $page: Int!) {
    harvestRecord(slug: $slug) {
      harvestMessages(page: $page, perPage: 20) {
        ...HarvestMessagesListFragment
      }
    }
  }
`;
