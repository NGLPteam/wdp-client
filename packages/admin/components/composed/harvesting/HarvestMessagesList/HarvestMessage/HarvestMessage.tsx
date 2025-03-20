import { graphql, useFragment } from "react-relay";
import { formatDate } from "@wdp/lib/helpers";
import type { HarvestMessageFragment$key } from "@/relay/HarvestMessageFragment.graphql";
import * as Styled from "./HarvestMessage.styles";

export default function HarvestMessage({
  data,
  isMapping,
}: {
  data: HarvestMessageFragment$key;
  isMapping?: boolean;
}) {
  const message = useFragment(fragment, data);

  return (
    <Styled.Grid>
      <Styled.Level>{message.level}</Styled.Level>
      <Styled.Date>{formatDate(message.createdAt)}</Styled.Date>
      <Styled.Body>
        <div>{message.message}</div>
        <Styled.Links>
          {!isMapping && <span>Link to Mapping</span>}
          <span>Link to Attempt</span>
          <span>Link to Record</span>
          <span>Tags: {message.tags?.join(", ").replaceAll("_", " ")}</span>
        </Styled.Links>
      </Styled.Body>
    </Styled.Grid>
  );
}

const fragment = graphql`
  fragment HarvestMessageFragment on HarvestMessage {
    id
    level
    message
    tags
    createdAt
  }
`;
