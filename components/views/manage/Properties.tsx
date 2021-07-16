import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Properties() {
  const { activeModel: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Properties</ContentTitle>
      <div>
        Properties for {entity}: {id}
      </div>
    </div>
  );
}
