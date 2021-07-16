import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Access() {
  const { activeModel: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Access</ContentTitle>
      <div>
        Access for {entity}: {id}
      </div>
    </div>
  );
}
