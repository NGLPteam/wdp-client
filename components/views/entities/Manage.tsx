import React from "react";
import { useGlobalData } from "hooks/useGlobalData";

export default function Manage() {
  const { activeEntity: entity, activeId: id } = useGlobalData();
  return (
    <section>
      <div>
        Manage {entity}: {id}
      </div>
    </section>
  );
}
