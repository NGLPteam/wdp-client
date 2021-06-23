import React, { useCallback } from "react";
import { ItemListQueryVariables } from "__generated__/ItemListQuery.graphql";

export default function ItemHeaders({ variables, setVariables }: Props) {
  const handleSort = useCallback(() => {
    const newOrder = variables.order === "RECENT" ? "OLDEST" : "RECENT";
    setVariables({ order: newOrder });
  }, [variables, setVariables]);

  return (
    <div>
      <h4>Title</h4>
      <button onClick={handleSort}>
        Sort {/* TODO: use lovely svg caret */}
        {variables.order === "RECENT" ? "RECENT" : "OLDEST"}
      </button>
    </div>
  );
}

export interface Variables extends ItemListQueryVariables {
  order: "RECENT" | "OLDEST";
}

interface Props {
  variables: Variables;
  setVariables: React.Dispatch<React.SetStateAction<Variables>>;
}
