import React from "react";
import { useSetActiveModel, useSetActiveView } from "hooks/useRouterContext";

export default function SettingsPage() {
  useSetActiveModel();
  const view = useSetActiveView();

  return (
    <div>
      <h1>Settings: {view}</h1>
    </div>
  );
}
