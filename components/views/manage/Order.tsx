import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Order() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Order</ContentTitle>
      <div>
        Orderings for {entity}: {id}
      </div>
    </div>
  );
}
