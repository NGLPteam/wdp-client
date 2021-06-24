import React, { useCallback } from "react";
import { CollectionListQueryVariables } from "__generated__/CollectionListQuery.graphql";

export default function CollectionHeaders({ variables, setVariables }: Props) {
  const handleSort = useCallback(() => {
    const newOrder = variables.order === "RECENT" ? "OLDEST" : "RECENT";
    setVariables({ order: newOrder, page: 1 });
  }, [variables, setVariables]);

  return (
    <div>
      <h4>Name</h4>
      <button onClick={handleSort}>
        Sort {/* TODO: use lovely svg caret */}
        {variables.order === "RECENT" ? "RECENT" : "OLDEST"}
      </button>
    </div>
  );
}

interface Props {
  variables: CollectionListQueryVariables;
  setVariables: React.Dispatch<
    React.SetStateAction<CollectionListQueryVariables>
  >;
}
