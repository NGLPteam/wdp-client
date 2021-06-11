import React, { useCallback } from "react";
import { useForm } from "react-hook-form";

import { CollectionListQueryVariables } from "__generated__/CollectionListQuery.graphql";

export default function CollectionFilters(props: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: props.variables,
  });

  const onSubmit = useCallback(
    (data: CollectionListQueryVariables) => {
      props.setVariables(data);
    },
    [props.setVariables]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("order", { required: true })}>
        <option value="RECENT">Recent</option>
        <option value="OLDEST">Oldest</option>
      </select>

      <button type="submit">Apply</button>
    </form>
  );
}

export interface Variables extends CollectionListQueryVariables {
  order: "RECENT" | "OLDEST";
}

interface Props {
  variables: Variables;
  setVariables: (variables: CollectionListQueryVariables) => void;
}
