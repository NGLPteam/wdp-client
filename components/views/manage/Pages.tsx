import React from "react";
import { useGlobalData } from "hooks/useGlobalData";
import { ContentTitle } from "components/atomic";

export default function Pages() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <div>
      <ContentTitle as="h2">Pages</ContentTitle>
      <div>
        Pages for {entity}: {id}
      </div>
    </div>
  );
}
