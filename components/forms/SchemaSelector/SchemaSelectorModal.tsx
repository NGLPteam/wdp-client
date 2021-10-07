import React, { useMemo } from "react";
import { graphql } from "react-relay";
import { DialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import Select from "components/forms/Select";
import Modal from "components/layout/Modal";

import {
  AlterSchemaVersionInput,
  SchemaSelectorModalMutation,
} from "@/relay/SchemaSelectorModalMutation.graphql";
import MutationForm, {
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import { SchemaSelectorOptionsFragment$data } from "@/relay/SchemaSelectorOptionsFragment.graphql";
import { SchemaKind } from "types/graphql-schema";

import * as Styled from "./SchemaSelector.styles";

const SchemaSelectorModal = ({
  dialog,
  optionsData,
  entityId,
  schemaVersionSlug,
  schemaKind,
}: Props) => {
  const { t } = useTranslation();

  const defaultValues = {
    schemaVersionSlug,
  };

  const toVariables = useToVariables<SchemaSelectorModalMutation, Fields>(
    (data) => ({
      input: { ...data, entityId, propertyValues: {} },
    }),
    []
  );

  const options = useMemo(
    () =>
      optionsData?.edges
        ?.filter((item) => item.node.kind === schemaKind)
        .map((item) => ({
          label: `${item.node.name} ${item.node.number}`,
          value: item.node.slug,
        })) || [],
    [optionsData, schemaKind]
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Select
        options={options}
        label={t("forms.schema.selector.new_label")}
        {...register("schemaVersionSlug")}
        description={t("forms.schema.selector.warning")}
      />
    ),
    []
  );

  return (
    <Modal
      label={t("forms.schema.selector.modal.label")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {({ handleClose }) => (
        <Styled.ModalContent className="t-rte">
          <p>{t("forms.schema.selector.modal.message")}</p>
          <MutationForm<SchemaSelectorModalMutation, Fields>
            name="alterSchemaVersion"
            mutation={mutation}
            successNotification={t("forms.schema.update.success")}
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
  dialog: DialogState;
  optionsData: SchemaSelectorOptionsFragment$data;
  entityId: string;
  schemaVersionSlug: string;
  schemaKind: SchemaKind;
}

const mutation = graphql`
  mutation SchemaSelectorModalMutation($input: AlterSchemaVersionInput!) {
    alterSchemaVersion(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
