import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Access() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Access</ContentTitle>
      <div>
        Access for {entity}: {id}
      </div>
    </div>
  );
}
