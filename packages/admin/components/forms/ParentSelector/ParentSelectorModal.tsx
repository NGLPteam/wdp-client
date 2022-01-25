import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { DialogState } from "reakit/Dialog";
import Modal from "components/layout/Modal";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import * as Styled from "./ParentSelector.styles";

import {
  ParentSelectorModalOptionsQuery as Query,
  ParentSelectorModalOptionsQueryResponse as Response,
} from "@/relay/ParentSelectorModalOptionsQuery.graphql";
import {
  ReparentEntityInput,
  ParentSelectorModalMutation,
} from "@/relay/ParentSelectorModalMutation.graphql";

export default function ParentSelectorModal({
  dialog,
  entityId,
  parentId,
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

  const getOptions = (data: Response | null | undefined) => {
    const collectionOptions =
      data?.viewer?.collections?.edges.map((collection) => ({
        label: `${collection.node.title}`,
        value: collection.node.id,
      })) || [];
    const communityOptions =
      data?.communities?.edges.map((community) => ({
        label: `${community.node.title}`,
        value: community.node.id,
      })) || [];
    return [...collectionOptions, ...communityOptions];
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <QueryWrapper<Query> query={query}>
        {({ data }) =>
          data?.viewer?.collections?.edges ? (
            <Forms.Select
              options={getOptions(data)}
              label={t("forms.parent.new_label")}
              description={t("forms.parent.change_warning")}
              {...register("parentId")}
            />
          ) : null
        }
      </QueryWrapper>
    ),
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
          <p>{t("forms.parent.change_message")}</p>
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
  parentId: string;
};

type Fields = ReparentEntityInput;

const query = graphql`
  query ParentSelectorModalOptionsQuery {
    viewer {
      collections {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    communities {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation ParentSelectorModalMutation($input: ReparentEntityInput!) {
    reparentEntity(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
