import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";
import SchemaSelector from "components/forms/SchemaSelector";
import type { SchemaInstanceFormFragment$key } from "@/relay/SchemaInstanceFormFragment.graphql";
import SchemaFormFields from "../SchemaFormFields";
import Provider from "./SchemaInstanceProvider";
import type { OnSuccessCallback } from "./types";

type ProviderProps = React.ComponentProps<typeof Provider>;

export default function SchemaInstanceForm({
  onSuccess,
  onSaveAndClose,
  onCancel,
  successNotification,
  failureNotification,
  title = "forms.schema.label",
  schemaKind,
  ...props
}: Props) {
  const instance = useFragment(fragment, props.instance);

  function renderForm() {
    return instance.properties && instance.properties.length > 0 ? (
      <Provider
        context={instance.context}
        onSuccess={onSuccess}
        onSaveAndClose={onSaveAndClose}
        onCancel={onCancel}
        successNotification={successNotification}
        failureNotification={failureNotification}
      >
        <SchemaFormFields
          title={title}
          data={instance}
          schemaKind={schemaKind}
        />
      </Provider>
    ) : (
      <SchemaSelector schemaData={instance} schemaKind={schemaKind} />
    );
  }

  return renderForm();
}

type ProviderTypes = Pick<
  ProviderProps,
  "successNotification" | "failureNotification"
>;

interface Props extends ProviderTypes {
  instance: SchemaInstanceFormFragment$key;
  onSuccess?: OnSuccessCallback;
  onCancel?: () => void;
  onSaveAndClose?: () => void;
  title?: string;
  schemaKind: "COLLECTION" | "ITEM" | "COMMUNITY";
}

const fragment = graphql`
  fragment SchemaInstanceFormFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...SchemaInstanceProviderFragment
    }

    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }

    ...SchemaFormFieldsFragment
    ...SchemaSelectorDataFragment
  }
`;
