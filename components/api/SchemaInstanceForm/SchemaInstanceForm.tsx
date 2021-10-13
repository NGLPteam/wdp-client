import React from "react";
import { useFragment } from "relay-hooks";
import { graphql } from "relay-runtime";
import { useTranslation } from "react-i18next";
import FormGrid from "components/forms/FormGrid";
import { ContentHeader } from "components/layout";
import SchemaSelector from "components/forms/SchemaSelector";

import Property from "./SchemaInstanceProperty";
import Provider from "./SchemaInstanceProvider";

import type { SchemaInstanceFormFragment$key } from "@/relay/SchemaInstanceFormFragment.graphql";
import type { OnSuccessCallback } from "./types";
type ProviderProps = React.ComponentProps<typeof Provider>;
type SchemaSelectorProps = React.ComponentProps<typeof SchemaSelector>;

export default function SchemaInstanceForm({
  onSuccess,
  onSaveAndClose,
  onCancel,
  successNotification,
  failureNotification,
  title = "forms.schema.title",
  schemaKind,
  ...props
}: Props) {
  const instance = useFragment(fragment, props.instance);

  const { t } = useTranslation();

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
        <FormGrid>
          <SchemaSelector schemaData={instance} schemaKind={schemaKind} />
          {instance.properties.map((prop, index) => (
            <Property property={prop} key={index} />
          ))}
        </FormGrid>
      </Provider>
    ) : (
      <SchemaSelector schemaData={instance} schemaKind={schemaKind} />
    );
  }

  return (
    <>
      <ContentHeader title={t(title)} headerStyle="secondary" />
      {renderForm()}
    </>
  );
}

type ProviderTypes = Pick<
  ProviderProps,
  "successNotification" | "failureNotification"
>;

type SchemaTypes = Partial<Pick<SchemaSelectorProps, "schemaKind">>;

interface Props extends ProviderTypes, SchemaTypes {
  instance: SchemaInstanceFormFragment$key;
  onSuccess?: OnSuccessCallback;
  onCancel?: () => void;
  onSaveAndClose?: () => void;
  title?: string;
}

const fragment = graphql`
  fragment SchemaInstanceFormFragment on SchemaInstance {
    context: schemaInstanceContext {
      ...SchemaInstanceProviderFragment
    }

    properties: schemaProperties {
      ...SchemaInstancePropertyFragment
    }

    ...SchemaSelectorDataFragment
  }
`;
