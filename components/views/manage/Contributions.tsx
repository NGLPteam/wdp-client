import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Contributions() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Contributions</ContentTitle>
      <div>
        Contributions for {entity}: {id}
      </div>
    </div>
  );
}
