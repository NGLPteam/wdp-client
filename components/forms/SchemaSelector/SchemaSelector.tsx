import React, { useMemo } from "react";
import { graphql, useFragment } from "react-relay";
import { DialogDisclosure, useDialogState } from "reakit/Dialog";
import Select from "components/forms/Select";
import BaseInputWrapper from "components/forms/BaseInputWrapper";
import { SchemaSelectorFragment$key } from "@/relay/SchemaSelectorFragment.graphql";
import { ButtonControl } from "components/atomic";
import Modal from "components/layout/Modal";
import {
  AlterSchemaVersionInput,
  SchemaSelectorMutation,
} from "@/relay/SchemaSelectorMutation.graphql";
import MutationForm, {
  useRenderForm,
  useToVariables,
} from "components/api/MutationForm";
import * as Styled from "./SchemaSelector.styles";

type SelectProps = React.ComponentProps<typeof Select>;

const SchemaSelector = ({ data, kind, schemaVersion, entityId }: Props) => {
  const definitions = useFragment(fragment, data);

  const dialog = useDialogState({ visible: false, animated: true });

  const options = useMemo(
    () =>
      definitions?.edges
        ?.filter((item) => item.node.kind === kind)
        .map((item) => ({
          label: `${item.node.name} ${item.node.number}`,
          value: item.node.slug,
        })),
    [definitions, kind]
  );

  const defaultValues = {
    schemaVersionSlug: schemaVersion.slug,
  };

  const toVariables = useToVariables<SchemaSelectorMutation, Fields>(
    (data) => ({ input: { ...data, entityId } }),
    []
  );

  const renderForm = useRenderForm<Fields>(
    ({ form: { register } }) => (
      <Select
        options={options}
        label="New Schema"
        {...register("schemaVersionSlug")}
        description="Changing the schema will permanently alter this model's properties."
      />
    ),
    []
  );

  return (
    <>
      <BaseInputWrapper label="Schema" name="schema">
        <Styled.FieldWrapper>
          {schemaVersion && (
            <Styled.VersionText>{`${schemaVersion.name} ${schemaVersion.number}`}</Styled.VersionText>
          )}
          <DialogDisclosure as={ButtonControl} {...dialog}>
            Change
          </DialogDisclosure>
        </Styled.FieldWrapper>
      </BaseInputWrapper>
      <Modal label="Change Schema" dialog={dialog} hideOnClickOutside={false}>
        {({ handleClose }) => (
          <Styled.ModalContent className="t-rte">
            <p>Are you sure you want to change this schema?</p>
            <MutationForm<SchemaSelectorMutation, Fields>
              name="alterSchemaVersion"
              mutation={mutation}
              successNotification="Successfully updated schema"
              toVariables={toVariables}
              defaultValues={defaultValues}
              onSuccess={handleClose}
              onCancel={handleClose}
            >
              {renderForm}
            </MutationForm>
          </Styled.ModalContent>
        )}
      </Modal>
    </>
  );
};

interface Props extends Pick<SelectProps, "defaultValue"> {
  data: SchemaSelectorFragment$key;
  kind: "ITEM" | "COLLECTION";
  schemaVersion: {
    name: string;
    number: string;
    slug: string;
  };
  entityId: string;
}

type Fields = AlterSchemaVersionInput;

export default SchemaSelector;

const fragment = graphql`
  fragment SchemaSelectorFragment on SchemaVersionConnection {
    edges {
      node {
        name
        namespace
        identifier
        kind
        slug
        number
      }
    }
  }
`;

const mutation = graphql`
  mutation SchemaSelectorMutation($input: AlterSchemaVersionInput!) {
    alterSchemaVersion(input: $input) {
      ...MutationForm_mutationErrors
    }
  }
`;
