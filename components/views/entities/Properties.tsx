import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Properties() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Properties</ContentTitle>
      <div>
        Properties for {entity}: {id}
      </div>
    </div>
  );
}
