import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Files() {
  const { activeModel: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Files</ContentTitle>
      <div>
        Files for {entity}: {id}
      </div>
    </div>
  );
}
