import React from "react";
import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";
import { useMaybeFragment } from "hooks";
import { getContributorDisplayName } from "components/composed/contributor/ContributorDisplayName/ContributorDisplayName";

import type {
  UpdateContributionInput,
  ContributionUpdateFormMutation,
} from "@/relay/ContributionUpdateFormMutation.graphql";
import type { ContributionUpdateFormFragment$key } from "@/relay/ContributionUpdateFormFragment.graphql";
import type { ContributionUpdateFormFieldsFragment$key } from "@/relay/ContributionUpdateFormFieldsFragment.graphql";

export default function ContributionUpdateForm({ data, onSuccess }: Props) {
  const maybeContribution = useFragment<ContributionUpdateFormFragment$key>(
    fragment,
    data
  );

  let title = "";
  let objectLabel = "forms.contribution.fields.object";
  switch (maybeContribution.__typename) {
    case "ItemContribution":
      objectLabel = "forms.contribution.fields.item";
      title = maybeContribution.item.title || "";
      break;
    case "CollectionContribution":
      objectLabel = "forms.contribution.fields.collection";
      title = maybeContribution.collection.title || "";
      break;
  }

  /* eslint-disable max-len */
  const defaultValues = useMaybeFragment<ContributionUpdateFormFieldsFragment$key>(
    fieldsFragment,
    maybeContribution.__typename !== "%other" ? maybeContribution : null
  );
  /* eslint-enable max-len */

  const toVariables = useToVariables<ContributionUpdateFormMutation, Fields>(
    (data) => {
      const contributionId =
        maybeContribution.__typename !== "%other"
          ? maybeContribution.contributionId
          : "";
      return { input: { ...data, contributionId } };
    },
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.Input
          name=""
          label="forms.contribution.fields.contributor"
          disabled
          defaultValue={getContributorDisplayName(
            maybeContribution.__typename !== "%other"
              ? maybeContribution.contributor
              : null
          )}
        />
        <Forms.Input
          name=""
          label={objectLabel}
          disabled
          defaultValue={title}
        />
        <Forms.Input
          label="forms.contribution.fields.role"
          {...register("role")}
        />
      </Forms.Grid>
    ),
    []
  );

  return (
    <MutationForm<ContributionUpdateFormMutation, Fields>
      name="updateContribution"
      onSuccess={onSuccess}
      successNotification="forms.contribution.update.success"
      mutation={mutation}
      toVariables={toVariables}
      defaultValues={defaultValues || {}}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props
  extends Pick<React.ComponentProps<typeof MutationForm>, "onSuccess"> {
  data: ContributionUpdateFormFragment$key;
}

type Fields = Omit<UpdateContributionInput, "contributionId">;

const fieldsFragment = graphql`
  fragment ContributionUpdateFormFieldsFragment on AnyContribution {
    ... on CollectionContribution {
      role
    }
    ... on ItemContribution {
      role
    }
  }
`;

const mutation = graphql`
  mutation ContributionUpdateFormMutation($input: UpdateContributionInput!) {
    updateContribution(input: $input) {
      contribution {
        ...ContributionUpdateFormFieldsFragment
      }
      ...MutationForm_mutationErrors
    }
  }
`;

const fragment = graphql`
  fragment ContributionUpdateFormFragment on AnyContribution {
    __typename
    ... on CollectionContribution {
      contributionId: id
      contributor {
        __typename
        ... on OrganizationContributor {
          slug
          legalName
        }
        ... on PersonContributor {
          slug
          givenName
          familyName
        }
      }
      collection {
        title
      }
      ...ContributionUpdateFormFieldsFragment
    }
    ... on ItemContribution {
      contributionId: id
      contributor {
        __typename
        ... on OrganizationContributor {
          slug
          legalName
        }
        ... on PersonContributor {
          slug
          givenName
          familyName
        }
      }
      item {
        title
      }
      title
      ...ContributionUpdateFormFieldsFragment
    }
  }
`;