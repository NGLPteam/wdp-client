import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import isEmpty from "lodash/isEmpty";
import { MutationForm } from "components/api";
import {
  Forms,
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import { Modal } from "components/layout";
import {
  SelectInitialOrderingInput,
  SetIntitialOrderingModalMutation,
} from "@/relay/SetIntitialOrderingModalMutation.graphql";
import { SetIntitialOrderingModalFragment$key } from "@/relay/SetIntitialOrderingModalFragment.graphql";
import * as Styled from "./SetIntitialOrderingModal.styles";

type ModalProps = React.ComponentProps<typeof Modal>;

interface Props {
  data: SetIntitialOrderingModalFragment$key;
  dialog: ModalProps["dialog"];
}

export default function SetIntitialOrderingModal({ data, dialog }: Props) {
  const { t } = useTranslation();

  const entity = useFragment<SetIntitialOrderingModalFragment$key>(
    fragment,
    data
  );

  const toVariables = useToVariables<SetIntitialOrderingModalMutation, Fields>(
    (data) => ({ input: { ...data, entityId: entity.id || "" } }),
    []
  );

  const options = useMemo(
    () =>
      entity?.orderings?.edges
        .filter(({ node }) => !isEmpty(node))
        .map(({ node }) => ({
          label: node.name || "",
          value: node.id,
        })) || [],
    [entity]
  );

  const defaultValues = useMemo(() => {
    const initialOrdering = entity?.orderings?.edges.find(
      ({ node }) => node?.initial
    );
    return { orderingId: initialOrdering?.node.id };
  }, [entity]);

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <>
        <Styled.SelectDescription>
          {t("forms.fields.initial_ordering_description", {
            name: entity.title,
          })}
        </Styled.SelectDescription>
        <Forms.Select
          required
          label="forms.fields.initial_ordering"
          options={options}
          {...register("orderingId")}
        />
      </>
    ),
    [options, t]
  );

  return (
    <Modal dialog={dialog} label={t("actions.set.initial_ordering")}>
      <Styled.ModalContent>
        <MutationForm<SetIntitialOrderingModalMutation, Fields>
          mutation={mutation}
          refetchTags={["orderings"]}
          name="selectInitialOrdering"
          toVariables={toVariables}
          defaultValues={defaultValues}
          onCancel={dialog.hide}
          onSuccess={dialog.hide}
          successNotification="messages.update.initial_ordering_success"
          failureNotification="messages.update.initial_ordering_failure"
        >
          {renderForm}
        </MutationForm>
      </Styled.ModalContent>
    </Modal>
  );
}

type Fields = Omit<SelectInitialOrderingInput, "entityId">;

const fragment = graphql`
  fragment SetIntitialOrderingModalFragment on Entity {
    ... on Item {
      id
      title
      orderings(page: $page) {
        edges {
          node {
            id
            name
            initial
          }
        }
      }
    }
    ... on Collection {
      id
      title
      orderings(page: $page) {
        edges {
          node {
            id
            name
            initial
          }
        }
      }
    }
  }
`;

const mutation = graphql`
  mutation SetIntitialOrderingModalMutation(
    $input: SelectInitialOrderingInput!
  ) {
    selectInitialOrdering(input: $input) {
      ordering {
        id
        initial
      }
      ...MutationForm_mutationErrors
    }
  }
`;
