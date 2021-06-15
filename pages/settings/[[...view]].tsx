import React from "react";
import { useSetLocale } from "hooks/useSetLocale";
import { useSetActiveEntity, useSetActiveView } from "hooks/useGlobalData";

export default function SettingsPage() {
  useSetLocale("en");
  useSetActiveEntity();
  const view = useSetActiveView();

  return (
    <div>
      <h1>Settings: {view}</h1>
    </div>
  );
}
