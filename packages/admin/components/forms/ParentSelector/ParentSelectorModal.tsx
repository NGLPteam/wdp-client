import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "react-relay";
import type { DialogState } from "reakit/Dialog";
import QueryWrapper from "@wdp/lib/api/components/QueryWrapper";
import { Option } from "../BaseSelect/BaseSelect";
import * as Styled from "./ParentSelector.styles";
import Modal from "components/layout/Modal";
import MutationForm, {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";

import {
  ParentSelectorModalOptionsQuery as Query,
  ParentSelectorModalOptionsQueryResponse as Response,
} from "@/relay/ParentSelectorModalOptionsQuery.graphql";
import {
  ReparentEntityInput,
  ParentSelectorModalMutation,
} from "@/relay/ParentSelectorModalMutation.graphql";

import { EntityDescendantScopeFilter } from "types/graphql-schema";

export default function ParentSelectorModal({
  dialog,
  entityId,
  entityKind,
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

  const queryVars = {
    scope:
      entityKind === "Collection"
        ? ("COLLECTION" as EntityDescendantScopeFilter)
        : ("ANY_ENTITY" as EntityDescendantScopeFilter),
  };

  const getOptions = (data: Response | null | undefined) => {
    const communityOptions =
      data?.communities?.edges.map((community) => ({
        label: `${community.node.title}`,
        value: community.node.id,
      })) || [];
    const descendants = data?.communities?.edges
      .map((community) =>
        community.node.descendants?.edges.map((edge) => edge.node.descendant)
      )
      .flat();
    const collectionAndItemOptions =
      descendants
        ?.map((entity) => ({
          label: `${entity.title}`,
          value: entity.id,
        }))
        .filter((option) => option.value) || [];
    return [...communityOptions, ...collectionAndItemOptions] as Option[];
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <QueryWrapper<Query> query={query} initialVariables={queryVars}>
        {({ data }) =>
          data?.communities.edges.length ? (
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
  entityKind: string;
  parentId: string;
};

type Fields = ReparentEntityInput;

const query = graphql`
  query ParentSelectorModalOptionsQuery($scope: EntityDescendantScopeFilter!) {
    communities {
      edges {
        node {
          id
          title
          descendants(scope: $scope) {
            edges {
              node {
                descendant {
                  ... on Collection {
                    id
                    title
                  }
                  ... on Item {
                    id
                    title
                  }
                }
              }
            }
          }
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
