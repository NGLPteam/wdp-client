import { graphql, useFragment } from "react-relay";
import MutationForm, {
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  EntityAnnouncementUpdateFormMutation,
  UpdateAnnouncementInput,
} from "@/relay/EntityAnnouncementUpdateFormMutation.graphql";
import type { EntityAnnouncementUpdateFormFragment$key } from "@/relay/EntityAnnouncementUpdateFormFragment.graphql";

export default function EntityAnnouncementUpdateForm({
  data,
  onSuccess,
  onCancel,
}: Props) {
  const { announcement } =
    useFragment<EntityAnnouncementUpdateFormFragment$key>(fragment, data);

  const toVariables = useToVariables<
    EntityAnnouncementUpdateFormMutation,
    Fields
  >(
    (data) => ({ input: { ...data, announcementId: announcement?.id || "" } }),
    [],
  );

  const defaultValues = {
    header: announcement?.header,
    body: announcement?.body,
    publishedOn: announcement?.publishedOn,
    teaser: announcement?.teaser,
  };

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
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
    ),
    [],
  );

  return (
    <MutationForm<EntityAnnouncementUpdateFormMutation, Fields>
      mutation={mutation}
      onSuccess={onSuccess}
      onCancel={onCancel}
      successNotification="messages.update.announcement_success"
      failureNotification="messages.update.announcement_failure"
      name="updateAnnouncement"
      refetchTags={["announcements"]}
      toVariables={toVariables}
      defaultValues={defaultValues}
    >
      {renderForm}
    </MutationForm>
  );
}

type Props = Pick<
  React.ComponentProps<typeof MutationForm>,
  "onSuccess" | "onCancel"
> & { data: EntityAnnouncementUpdateFormFragment$key };

type Fields = Omit<UpdateAnnouncementInput, "announcementId">;

const fragment = graphql`
  fragment EntityAnnouncementUpdateFormFragment on AnyEntity {
    ... on Community {
      announcement(slug: $announcementSlug) {
        id
        slug
        header
        publishedOn
        teaser
        body
      }
    }
    ... on Collection {
      announcement(slug: $announcementSlug) {
        id
        slug
        header
        publishedOn
        teaser
        body
      }
    }
    ... on Item {
      announcement(slug: $announcementSlug) {
        id
        slug
        header
        publishedOn
        teaser
        body
      }
    }
  }
`;

const mutation = graphql`
  mutation EntityAnnouncementUpdateFormMutation(
    $input: UpdateAnnouncementInput!
  ) {
    updateAnnouncement(input: $input) {
      announcement {
        id
        slug
        header
        publishedOn
        teaser
        body
      }
      ...MutationForm_mutationErrors
    }
  }
`;
