import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Links() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Links</ContentTitle>
      <div>
        Links for {entity}: {id}
      </div>
    </div>
  );
}
