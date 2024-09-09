import { useFragment, graphql } from "react-relay";
import MutationForm, {
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
    data,
  );

  // Sets the slug to the title if no slug is provided
  const toVariables = useToVariables<EntityAnnouncementAddFormMutation, Fields>(
    (data) => {
      const today = new Date();

      return {
        input: {
          ...data,
          entityId: sourceEntity.id || "",
          publishedOn: data.publishedOn || today.toISOString(),
        },
      };
    },
    [],
  );

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
      {({ form: { register } }) => (
        <Forms.Grid>
          <Forms.Input
            label="forms.fields.header"
            {...register("header")}
            required
          />
          <Forms.DatePicker
            label="forms.fields.published"
            {...register("publishedOn")}
            required
          />
          <Forms.Textarea
            label="forms.fields.teaser"
            {...register("teaser")}
            required
          />
          <Forms.Textarea
            label="forms.fields.body"
            {...register("body")}
            required
          />
        </Forms.Grid>
      )}
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
