import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Order() {
  const { activeModel: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Order</ContentTitle>
      <div>
        Orderings for {entity}: {id}
      </div>
    </div>
  );
}
