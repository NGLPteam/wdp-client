import React from "react";
import { useSetActiveEntity } from "hooks/useRouterContext";

export default function Home() {
  useSetActiveEntity();

  return <div>WDP Admin Homepage</div>;
}
