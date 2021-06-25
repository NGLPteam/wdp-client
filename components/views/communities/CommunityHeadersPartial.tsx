import React, { useCallback } from "react";
import { CommunityListQueryVariables } from "__generated__/CommunityListQuery.graphql";

export default function CommunityHeaders({ variables, setVariables }: Props) {
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
  variables: CommunityListQueryVariables;
  setVariables: React.Dispatch<
    React.SetStateAction<CommunityListQueryVariables>
  >;
}
