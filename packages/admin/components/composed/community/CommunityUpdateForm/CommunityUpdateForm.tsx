import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  UpdateCommunityInput,
  CommunityUpdateFormMutation,
} from "@/relay/CommunityUpdateFormMutation.graphql";
import type { CommunityUpdateFormFragment$key } from "@/relay/CommunityUpdateFormFragment.graphql";
import type { CommunityUpdateFormFieldsFragment$key } from "@/relay/CommunityUpdateFormFieldsFragment.graphql";

export default function CommunityUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { communityId = "", ...fieldsData } =
    useFragment<CommunityUpdateFormFragment$key>(fragment, data);

  const defaultValues = useFragment<CommunityUpdateFormFieldsFragment$key>(
    fieldsFragment,
    fieldsData
  );

  const toVariables = useToVariables<CommunityUpdateFormMutation, Fields>(
    (data) => ({ input: { ...data, communityId } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input label="forms.fields.title" {...register("title")} isWide />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<CommunityUpdateFormMutation, Fields>
      name="updateCommunity"
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.community_success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<
    React.ComponentProps<typeof MutationForm>,
    "onSuccess" | "onCancel"
  > {
  data: CommunityUpdateFormFragment$key;
}

type Fields = Omit<UpdateCommunityInput, "communityId">;

const fieldsFragment = graphql`
  fragment CommunityUpdateFormFieldsFragment on Community {
    title
  }
`;

const mutation = graphql`
  mutation CommunityUpdateFormMutation($input: UpdateCommunityInput!) {
    updateCommunity(input: $input) {
      community {
        ...CommunityUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment CommunityUpdateFormFragment on Community {
    communityId: id
    ...CommunityUpdateFormFieldsFragment
  }
`;
