import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { DialogState } from "reakit/Dialog";
import * as Styled from "./ParentSelector.styles";
import Modal from "components/layout/Modal";
import { EntitySelectorUI } from "components/forms";
import MutationForm, {
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import {
  ReparentEntityInput,
  ParentSelectorModalMutation,
} from "@/relay/ParentSelectorModalMutation.graphql";

export default function ParentSelectorModal({
  dialog,
  entityId,
  parentId,
  parentSlug,
}: Props) {
  const { t } = useTranslation();

  const defaultValues = {
    parentId,
  };

  const toVariables = useToVariables<ParentSelectorModalMutation, Fields>(
    (data) => ({
      input: { ...data, childId: entityId },
    }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { setValue, register } }) => {
      const onSelect = (id: string) => setValue("parentId", id);
      return (
        <EntitySelectorUI
          {...register("parentId", { required: true })}
          onSelect={onSelect}
          label={t("forms.parent.label")}
          startSlug={parentSlug}
          resetValue={parentId}
        />
      );
    },
    []
  );

  return (
    <Modal
      label={t("forms.parent.change_label")}
      dialog={dialog}
      hideOnClickOutside={false}
    >
      {({ handleClose }) => (
        <Styled.ModalContent className="t-rte">
          <Styled.Message>{t("forms.parent.change_message")}</Styled.Message>
          <MutationForm<ParentSelectorModalMutation, Fields>
            name="reparentEntity"
            mutation={mutation}
            successNotification={t("messages.update.parent_success")}
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
}

type Props = {
  dialog: DialogState;
  entityId: string;
  entityKind: string;
  parentId: string;
  parentSlug?: string;
};

type Fields = ReparentEntityInput;

const mutation = graphql`
  mutation ParentSelectorModalMutation($input: ReparentEntityInput!) {
    reparentEntity(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
