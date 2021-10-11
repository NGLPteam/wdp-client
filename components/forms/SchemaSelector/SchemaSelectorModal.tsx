import React from "react";
import { graphql } from "react-relay";
import { DialogState } from "reakit/Dialog";
import { useTranslation } from "react-i18next";
import Modal from "components/layout/Modal";
// These API components must use default imports to work
import QueryWrapper from "components/api/QueryWrapper";
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import {
  AlterSchemaVersionInput,
  SchemaSelectorModalMutation,
} from "@/relay/SchemaSelectorModalMutation.graphql";
import {
  SchemaSelectorModalOptionsQuery as Query,
  SchemaSelectorModalOptionsQueryResponse as Response,
} from "@/relay/SchemaSelectorModalOptionsQuery.graphql";
import { SchemaKind } from "types/graphql-schema";

import * as Styled from "./SchemaSelector.styles";

const SchemaSelectorModal = ({
  dialog,
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

  const getOptions = (data: Response | null | undefined) =>
    data?.schemaVersions?.edges
      ?.filter((item) => item.node.kind === schemaKind)
      .map((item) => ({
        label: `${item.node.name} ${item.node.number}`,
        value: item.node.slug,
      })) || [];

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <QueryWrapper<Query> query={query}>
        {({ data }) =>
          data?.schemaVersions?.edges ? (
            <Forms.Select
              options={getOptions(data)}
              label={t("forms.schema.selector.new_label")}
              description={t("forms.schema.selector.warning")}
              {...register("schemaVersionSlug")}
            />
          ) : null
        }
      </QueryWrapper>
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
  entityId: string;
  schemaVersionSlug: string;
  schemaKind: SchemaKind;
}

const query = graphql`
  query SchemaSelectorModalOptionsQuery {
    schemaVersions {
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
  }
`;

const mutation = graphql`
  mutation SchemaSelectorModalMutation($input: AlterSchemaVersionInput!) {
    alterSchemaVersion(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
