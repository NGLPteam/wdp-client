import { graphql } from "relay-runtime";
import { useFragment } from "react-relay";
import { useTranslation } from "react-i18next";
import Modal from "components/layout/Modal";
// These API components must use default imports to work
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import { SchemaKind } from "types/graphql-schema";
import {
  AlterSchemaVersionInput,
  SchemaSelectorModalMutation,
} from "@/relay/SchemaSelectorModalMutation.graphql";
import { SchemaSelectorModalOptionsFragment$key } from "@/relay/SchemaSelectorModalOptionsFragment.graphql";
import * as Styled from "./SchemaSelector.styles";
import type { DialogState } from "reakit/Dialog";

const SchemaSelectorModal = ({
  data,
  dialog,
  entityId,
  schemaVersionSlug,
  schemaKind,
}: Props) => {
  const { t } = useTranslation();

  const schemaVersions = useFragment(fragment, data);

  const defaultValues = {
    schemaVersionSlug,
  };

  const toVariables = useToVariables<SchemaSelectorModalMutation, Fields>(
    (data) => ({
      input: { ...data, entityId, propertyValues: {} },
    }),
    []
  );

  const options =
    schemaVersions?.edges
      ?.filter((item) => item.node.kind === schemaKind)
      .map((item) => ({
        label: `${item.node.name} ${item.node.number}`,
        value: item.node.slug,
      })) || [];

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Select
        options={options}
        label={t("forms.schema.new_label")}
        description={t("forms.schema.change_warning")}
        {...register("schemaVersionSlug")}
      />
    ),
    [options]
  );

  return (
    <Modal
      label={t("forms.schema.change_label")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {({ handleClose }) => (
        <Styled.ModalContent className="t-rte">
          <p>{t("forms.schema.change_message")}</p>
          <MutationForm<SchemaSelectorModalMutation, Fields>
            name="alterSchemaVersion"
            mutation={mutation}
            successNotification={t("messages.update.schema_success")}
            toVariables={toVariables}
            onSuccess={handleClose}
            onCancel={handleClose}
            defaultValues={defaultValues}
          >
            {renderForm}
          </MutationForm>
        </Styled.ModalContent>
      )}
    </Modal>
  );
};

export default SchemaSelectorModal;

type Fields = AlterSchemaVersionInput;

interface Props {
  data: SchemaSelectorModalOptionsFragment$key;
  dialog: DialogState;
  entityId: string;
  schemaVersionSlug: string;
  schemaKind: SchemaKind;
}

const fragment = graphql`
  fragment SchemaSelectorModalOptionsFragment on SchemaVersionConnection {
    edges {
      node {
        name
        namespace
        identifier
        kind
        slug
        number
      }
    }
  }
`;

const mutation = graphql`
  mutation SchemaSelectorModalMutation($input: AlterSchemaVersionInput!) {
    alterSchemaVersion(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
