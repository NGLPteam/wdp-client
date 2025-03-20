import { graphql, useFragment } from "react-relay";
import { NoResultsMessage } from "components/atomic";
import ModelPagination from "components/composed/model/ModelPagination";
import ModelPageCountActions from "components/composed/model/ModelPageCountActions";
import { HarvestMessagesListFragment$key } from "@/relay/HarvestMessagesListFragment.graphql";
import HarvestMessage from "./HarvestMessage";

export default function HarvestMessagesList({
  data,
  isMapping,
}: {
  data: HarvestMessagesListFragment$key;
  isMapping?: boolean;
}) {
  const { nodes: messages, ...pagination } = useFragment(fragment, data) ?? {};

  return messages && pagination ? (
    <>
      <ModelPageCountActions data={pagination} />
      {messages?.length ? (
        <ul>
          {messages?.map((m, i) => (
            <HarvestMessage key={i} data={m} isMapping={isMapping} />
          ))}
        </ul>
      ) : (
        <NoResultsMessage />
      )}
      <ModelPagination data={pagination} />
    </>
  ) : null;
}

const fragment = graphql`
  fragment HarvestMessagesListFragment on HarvestMessageConnection {
    nodes {
      ...HarvestMessageFragment
    }
    ...ModelPageCountActionsFragment
    ...ModelPaginationFragment
  }
`;
