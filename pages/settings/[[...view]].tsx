import React from "react";
import { useSetActiveEntity, useSetActiveView } from "hooks/useRouterContext";

export default function SettingsPage() {
  useSetActiveEntity();
  const view = useSetActiveView();

  return (
    <div>
      <h1>Settings: {view}</h1>
    </div>
  );
}
