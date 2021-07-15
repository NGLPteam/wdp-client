import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Contributions() {
  const { activeEntity: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Contributions</ContentTitle>
      <div>
        Contributions for {entity}: {id}
      </div>
    </div>
  );
}
