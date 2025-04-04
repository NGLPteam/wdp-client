import { graphql } from "react-relay";
import type { newHarvestAttemptFromMappingQuery } from "@/relay/newHarvestAttemptFromMappingQuery.graphql";
import type { newHarvestAttemptFromSourceQuery } from "@/relay/newHarvestAttemptFromSourceQuery.graphql";
import FromMapping from "./FromMapping";
import FromSource from "./FromSource";

type Props = {
  harvestMapping?: newHarvestAttemptFromMappingQuery["response"]["harvestMapping"];
  harvestSource?: newHarvestAttemptFromSourceQuery["response"]["harvestSource"];
};

export default function HarvestAttemptCreateForm({
  harvestMapping,
  harvestSource,
}: Props) {
  if (harvestMapping) return <FromMapping harvestMapping={harvestMapping} />;
  if (harvestSource) return <FromSource harvestSource={harvestSource} />;
  return null;
}

const _fragment = graphql`
  fragment HarvestAttemptCreateFormFieldsFragment on HarvestAttempt {
    id
    currentState
    metadataFormat
    beganAt
    endedAt
    mode
    scheduledAt
    recordCount
    note
    extractionMappingTemplate
  }
`;
