import React from "react";
import { useSetLocale } from "hooks/useSetLocale";
import {
  useSetActiveEntity,
  useSetActiveId,
  useSetActiveView,
} from "hooks/useGlobalData";

export default function EntityManagePage() {
  useSetLocale("en");
  const entity = useSetActiveEntity();
  const id = useSetActiveId();
  const view = useSetActiveView();

  return (
    <div>
      <h1>
        Manage {entity} #{id} - {view} view
      </h1>
    </div>
  );
}
