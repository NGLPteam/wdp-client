import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Links() {
  const { activeEntity: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Links</ContentTitle>
      <div>
        Links for {entity}: {id}
      </div>
    </div>
  );
}
