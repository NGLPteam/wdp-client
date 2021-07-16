import React from "react";
import { useRouterContext } from "hooks/useRouterContext";
import { ContentTitle } from "components/atomic";

export default function Pages() {
  const { activeModel: entity, activeId: id } = useRouterContext();
  return (
    <div>
      <ContentTitle as="h2">Pages</ContentTitle>
      <div>
        Pages for {entity}: {id}
      </div>
    </div>
  );
}
