import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityAnnouncementAddFormMutation,
  CreateAnnouncementInput,
} from "@/relay/EntityAnnouncementAddFormMutation.graphql";
import type { EntityAnnouncementAddFormFragment$key } from "@/relay/EntityAnnouncementAddFormFragment.graphql";

export default function EntityAnnouncementAddForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const sourceEntity = useFragment<EntityAnnouncementAddFormFragment$key>(
    fragment,
    data
  );

  // Sets the slug to the title if no slug is provided
  const toVariables = useToVariables<EntityAnnouncementAddFormMutation, Fields>(
    (data) => {
      return {
        input: {
          ...data,
          entityId: sourceEntity.id || "",
        },
      };
    },
    []
  );

  const renderForm = useRenderForm<Fields>(({ form: { register } }) => {
    return (
      <Forms.Grid>
        <Forms.Input
          required
          label="forms.fields.header"
          {...register("header")}
        />
        <Forms.DatePicker
          required
          label="forms.fields.published"
          {...register("publishedOn")}
        />
        <Forms.Textarea
          required
          label="forms.fields.teaser"
          {...register("teaser")}
        />
        <Forms.Textarea
          required
          label="forms.fields.body"
          {...register("body")}
        />
      </Forms.Grid>
    );
  }, []);

  return (
    <MutationForm<EntityAnnouncementAddFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.add.announcement_success"
      failureNotification="messages.add.announcement_failure"
      name="createAnnouncement"
      refetchTags={["announcements"]}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityAnnouncementAddFormFragment$key };

type Fields = Omit<CreateAnnouncementInput, "entityId">;

const fragment = graphql`
  fragment EntityAnnouncementAddFormFragment on AnyEntity {
    ... on Community {
      id
    }
    ... on Collection {
      id
    }
    ... on Item {
      id
    }
  }
`;

const mutation = graphql`
  mutation EntityAnnouncementAddFormMutation($input: CreateAnnouncementInput!) {
    createAnnouncement(input: $input) {
      announcement {
        id
        slug
        header
      }
      ...MutationForm_mutationErrors
    }
  }
`;
