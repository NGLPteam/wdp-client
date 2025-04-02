import { useFragment, graphql } from "react-relay";
import dynamic from "next/dynamic";
import { Forms } from "components/api/MutationForm";
import { formatDate } from "@wdp/lib/helpers";
import MockInput from "components/forms/MockInput";
import { FormFieldSkeleton } from "components/atomic/loading";
import type { HarvestAttemptDetailsFragment$key } from "@/relay/HarvestAttemptDetailsFragment.graphql";

const CodeEditor = dynamic(() => import("components/forms/CodeEditor"), {
  loading: () => <FormFieldSkeleton />,
  ssr: false,
});

export default function HarvestAttemptDetails({
  data,
}: {
  data: HarvestAttemptDetailsFragment$key;
}) {
  const fields = useFragment<HarvestAttemptDetailsFragment$key>(fragment, data);

  return (
    <Forms.Grid>
      <MockInput label="lists.status_column" value={fields.currentState} />
      <MockInput label="lists.record_count_column" value={fields.recordCount} />
      <MockInput
        label="lists.began_at_column"
        value={formatDate(fields.beganAt ?? "")}
      />
      <MockInput
        label="lists.ended_at_column"
        value={formatDate(fields.beganAt ?? "")}
      />
      <MockInput
        label="forms.fields.metadata_format"
        value={fields.metadataFormat}
        isWide={fields.mode === "SCHEDULED"}
      />
      <MockInput label="harvesting.mode" value={fields.mode} />
      {fields.mode === "SCHEDULED" && (
        <MockInput
          label="harvesting.current_schedule"
          value={fields.scheduledAt ?? ""}
        />
      )}
      <MockInput label="forms.fields.note" value={fields.note} isWide />
      <MockInput
        label="forms.extraction_mapping_template.label"
        value={() => (
          <CodeEditor
            unwrapped
            value={fields.extractionMappingTemplate ?? ""}
          />
        )}
        isWide
      />
    </Forms.Grid>
  );
}

const fragment = graphql`
  fragment HarvestAttemptDetailsFragment on HarvestAttempt {
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
