import { useFragment, graphql } from "react-relay";
import dynamic from "next/dynamic";
import { Forms } from "components/api/MutationForm";
import MockInput from "components/forms/MockInput";
import { FormFieldSkeleton } from "components/atomic/loading";
import type { HarvestRecordDetailsFragment$key } from "@/relay/HarvestRecordDetailsFragment.graphql";

const CodeEditor = dynamic(() => import("components/forms/CodeEditor"), {
  loading: () => <FormFieldSkeleton />,
  ssr: false,
});

export default function HarvestRecordDetails({
  data,
}: {
  data: HarvestRecordDetailsFragment$key;
}) {
  const fields = useFragment<HarvestRecordDetailsFragment$key>(fragment, data);

  return (
    <Forms.Grid>
      <MockInput
        label="lists.identifier_column"
        value={fields.identifier}
        isWide
      />
      <MockInput label="lists.status_column" value={fields.status} />
      <MockInput
        label="forms.fields.metadata_format"
        value={fields.metadataFormat}
      />
      <MockInput
        label="harvesting.raw_metadata_source"
        value={() => (
          <CodeEditor
            unwrapped
            isDialog
            value={fields.rawMetadataSource ?? ""}
          />
        )}
        isWide
      />
    </Forms.Grid>
  );
}

const fragment = graphql`
  fragment HarvestRecordDetailsFragment on HarvestRecord {
    id
    identifier
    metadataFormat
    status
    rawMetadataSource
  }
`;
