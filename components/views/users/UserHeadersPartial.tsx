import React, { useCallback } from "react";
import { UserListQueryVariables } from "__generated__/UserListQuery.graphql";

export default function UserHeaders({ variables, setVariables }: Props) {
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
  variables: UserListQueryVariables;
  setVariables: React.Dispatch<React.SetStateAction<UserListQueryVariables>>;
}
