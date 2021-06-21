import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Files() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Files</ContentTitle>
      <div>
        Files for {entity}: {id}
      </div>
    </div>
  );
}
