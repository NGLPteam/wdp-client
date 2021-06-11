import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { graphql } from "relay-runtime";
import { useMutation } from "relay-hooks";
import styled from "styled-components";

import {
  NewCollectionFormCreateMutationVariables,
  NewCollectionFormCreateMutationResponse,
} from "__generated__/NewCollectionFormCreateMutation.graphql";

export default function NewCollectionForm() {
  const [mutate, mutationState] = useMutation(mutation);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const submitForm = useCallback<SubmitHandler<FieldValues>>((input) => {
    const variables: NewCollectionFormCreateMutationVariables = {
      input,
    };

    mutate({
      onCompleted(response: NewCollectionFormCreateMutationResponse) {
        console.dir({ collection: response.createCollection.collection });
      },
      updater(store) {
        // In a more final version, we'd add the edge to the connection,
        // But for this stage, we just invalidate the store so that navigating
        // back to the collections page triggers a refetch with our new collection.
        store.invalidateStore();
      },
      variables,
    });
  }, []);

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Fieldset>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          aria-invalid={errors.title ? "true" : "false"}
          {...register("title", { required: true })}
        />
      </Fieldset>
      <Fieldset>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          aria-invalid={errors.description ? "true" : "false"}
          {...register("description", { required: true })}
        />
      </Fieldset>

      <button type="submit" disabled={mutationState.loading}>
        Create New Collection
      </button>
    </Form>
  );
}

interface FieldValues {
  title: string;
  description: string;
}

const mutation = graphql`
  mutation NewCollectionFormCreateMutation($input: CreateCollectionInput!) {
    createCollection(input: $input) {
      collection {
        title
        description
      }

      errors {
        message
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;

  button[type="submit"] {
    margin: 0 auto;
    width: 200px;
  }
`;

const Fieldset = styled.fieldset`
  flex: 1 1 auto;
  border: none;

  display: flex;
  flex-direction: column;
`;
