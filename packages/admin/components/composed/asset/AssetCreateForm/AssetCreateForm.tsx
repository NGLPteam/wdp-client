import { graphql } from "react-relay";

import type { CreateAssetInput } from "types/graphql-schema";

import MutationForm, {
  useOnSuccess,
  useRenderForm,
  useToVariables,
  Forms,
} from "components/api/MutationForm";

import type {
  AssetCreateFormMutation,
  AssetKind,
} from "@/relay/AssetCreateFormMutation.graphql";

export default function AssetCreateForm({ entityId, onCreate }: Props) {
  const onSuccess = useOnSuccess<AssetCreateFormMutation, FormValues>(
    function ({ response }) {
      const createdAsset = toCreatedAsset(response);

      if (createdAsset) {
        if (typeof onCreate === "function") {
          onCreate(createdAsset);
        } else {
          // TODO: Remove
          /* eslint-disable no-alert */
          alert(`Asset created: ${createdAsset.name}`);

          /* eslint-disable no-console */
          console.debug("asset created");

          console.dir({ response });
        }
      }
    },
    [onCreate]
  );

  const renderForm = useRenderForm<FormValues>(
    ({ form: { register } }) => (
      <Forms.Grid>
        <Forms.FileUpload label="File" name="attachment" required />
        <Forms.Input
          label="Name"
          description="Human-readable name of the asset"
          {...register("name", { required: true })}
        />
        <Forms.Textarea label="Caption" {...register("caption")} />
        <Forms.Textarea label="Alt Text" {...register("altText")} />
      </Forms.Grid>
    ),
    []
  );

  const toVariables = useToVariables<AssetCreateFormMutation, FormValues>(
    (data) => ({ input: { ...data, entityId } }),
    [entityId]
  );

  return (
    <MutationForm<AssetCreateFormMutation, FormValues>
      contentTitle="Create Asset"
      mutation={mutation}
      name="createAsset"
      onSuccess={onSuccess}
      toVariables={toVariables}
    >
      {renderForm}
    </MutationForm>
  );
}

interface Props {
  /**
   * The entity ID that should own the asset.
   */
  entityId: string;

  /**
   * Optional callback to execute on a successfully-created asset.
   *
   * Redirect to another page, show a toast pop-up, etc.
   */
  onCreate?: (asset: CreatedAsset) => void;
}

/**
 * This is the `TFieldValues` that need to be provided for
 * a whole slew of react-hook-form integrations, as well as
 * the second type to pass to MutationForm's generic.
 */
type FormValues = Pick<
  CreateAssetInput,
  "attachment" | "name" | "caption" | "altText"
>;

/**
 * A mapping of a created asset.
 */
interface CreatedAsset {
  id: string;
  kind: AssetKind;
  name: string;
  slug: string;
}

/**
 * Transform the `createAsset` mutation response into something we can safely pass out of the component.
 *
 * @param response the result of a mutation
 * @returns a mapping for use with `onCreate`
 */
function toCreatedAsset(
  response: AssetCreateFormMutation["response"]
): CreatedAsset | null {
  const asset = response?.createAsset?.asset;

  if (asset) {
    const { id, kind, name, slug } = asset;

    if (id && kind && name && slug) {
      const createdAsset: CreatedAsset = { id, kind, name, slug };

      return createdAsset;
    }
  }

  return null;
}

const mutation = graphql`
  mutation AssetCreateFormMutation($input: CreateAssetInput!) {
    createAsset(input: $input) {
      asset {
        __typename

        ... on Asset {
          id
          kind
          name
          slug
        }
      }

      ...MutationForm_mutationErrors
    }
  }
`;
